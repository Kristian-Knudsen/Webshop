import { PrismaClient } from '@prisma/client';
import { OrderData } from './types';

const prisma = new PrismaClient();

export const getOrdersByAmount = (amount: number): Promise<Object> => {
    return new Promise(async (resolve, reject) => {
        const orders = await prisma.order.findMany({ take: amount });

        try {
            resolve(JSON.stringify(orders));
        } catch (e) {
            reject(e);
        }
    });
};

export const getOrderById = async (id: number) => {
    return new Promise((resolve, reject) => {
        const order = prisma.order.findUnique({
            where: {
                id: id
            }
        })

        try {
            resolve(JSON.stringify(order));
        } catch (e) {
            reject(e);   
        }
    });
};

export const createOrder = async (order : OrderData) => {
    return;
}