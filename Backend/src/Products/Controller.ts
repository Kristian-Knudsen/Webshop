import { PrismaClient, Product } from "@prisma/client";
import { ProductData } from "./types";

const prisma = new PrismaClient();

export const getProducts = () : Promise<Object> => {
    return new Promise(async (resolve, reject) => {
        const products = await prisma.product.findMany();

        try {
            resolve(products);
        } catch (e) {
            reject(e);
        }
    })
}

export const getProductById = (suppliedId: number) : Promise<Product | null> => {
    return new Promise(async (resolve, reject) => {
        const product = await prisma.product.findUnique({
            where: {
                id: suppliedId
            }
        });

        try {
            resolve(product);
        } catch (e) {
            reject(e)
        }
    });
}

// FIX ME: Dynamic category insertion in categories->create->name
export const createProduct = (data : ProductData) : Promise<Object> => {
    return new Promise(async(resolve, reject) => {
        const created = await prisma.product.create({
            data: {
                name: data.name,
                price: data.price,
                currency: data.currency,
                image: data.image,
                current_inventory: data.current_inventory,
                description: data.description,
                categories: {
                    create: {
                        "name": "test"
                    }
                }
            }
        });

        resolve(`Producted created: ${data.name} with id: ${created.id}`);
    })
}