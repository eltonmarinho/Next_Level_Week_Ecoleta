import { Request, Response } from 'express';
import knex from '../database/connection'



class ItemsController { //na classe nao pode haver arrow function
    async index(request: Request, response: Response) { //metodo inder normalmente utilizado para listagens.
        const items = await knex('items').select('*'); //similar select * from items (SQL)
    
        const serializedItens = items.map(item =>{
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.15.8:3333/uploads/${item.image}`
            }
        })
    
        return response.json(serializedItens)
    }
}

export default ItemsController