// src/pages/api/feedback.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { answerOne, answerTwo, answerThree, answerFour } = req.body;
    const feedback = await prisma.feedback.create({
      data: {
        answerOne,
        answerTwo,
        answerThree,
        answerFour
      }
    });
    console.log('Feedback', feedback);
    res.json(feedback);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}