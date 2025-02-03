import { PrismaClient } from "@prisma/client";
import ProductSeeder from "./product.seed"

const prisma = new PrismaClient();
const main = async () => {
    await ProductSeeder();
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.log("🚀 ~ main ~ e:", e)
    await prisma.$disconnect();
    process.exit(1);
})