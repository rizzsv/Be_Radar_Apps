import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    const hashedPassword = await bcrypt.hash('ADMIN123', 10)

    const admin = await prisma.user.create({
        data: {
            email: 'admin2@gmail.com',
            password: hashedPassword,
            role: 'ADMIN',
            username: 'admin23',
            image: 'public/user/default.png',
        }
    })
    console.log('✅ Admin created:', admin);
}

main()
.catch((e) => {
    console.error('❌ Error seeding admin:', e);
    process.exit(1);
})
.finally(() => {
     prisma.$disconnect();
})