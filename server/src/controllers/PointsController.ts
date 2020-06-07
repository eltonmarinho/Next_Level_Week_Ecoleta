import knex from '../database/connection'
import { Request, Response } from 'express';

class PointsController {

    async index(request:Request, response:Response){
        //os filtros são sempre de origem QUERY

        const {city, uf, items} = request.query

        const parsedItems = String(items)
        .split(',')
        .map(item => Number(item.trim()))

        const points = await knex('points')
            .join('point_items', 'points.id', '=',  'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*')

        console.log(city, uf, items);

        return response.json(points)

    }


    async show(request:Request, response:Response){
        const {id} = request.params;

        const point = await knex('points').where ('id', id).first();

        if(!point){
            return response.status(400).json({ message: 'Point not found.' })
        }

        const items = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id)
        .select('items.title')
        
        return response.json({point, items });

    }

    async create(request:Request, response:Response) {
        const { //quando se sabe o formado do body pode-se buscar pelos campos
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body
        /* a acao anterior pode ser representada por: 
        const name=request.body.name; 
        const email=request.body.email;  */
    
        const trx = await knex.transaction(); //funcionalidade para impedir que um insert rode apos o primeiro ter falhado.
        

        const point = {
            image:'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            name,//short sintaxe, quando o nome da variavel é igual a proprieda do objeto, é possivel omitir.
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        }
        
        const insertedIds = await trx('points').insert(point)
    
        const point_id = insertedIds[0];
    
        const pointItems = items.map((item_id: number) =>{
            return {
                item_id,
                point_id,
            }
        })
    
        await trx ('point_items').insert(pointItems)
        await trx.commit(); //este comando é necessário para confirmar a acão do transaction.
    
        return response.json({
            id: point_id,
            ...point,
        })
    }
}

export default PointsController