// app/api/test/route.ts
export default async function GET() {
    console.log('Server env:', {
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ? '***' : 'undefined',
    })
  
    return '123';
  }