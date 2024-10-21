import { z } from "zod";

export const userSchema = z.object({

    username: z.string().min(6).max(50),

    email: z.string().email(),

    password: z.string().min(6).max(50),

});

export const editUserSchema = z.object({

    username: z.string().min(6).max(50).optional(),

    email: z.string().email().optional(),

    password: z.string().min(6).max(50).optional(),

});

export const editFanficSchema = z.object({

    title: z.string().min(10).max(100).optional(),

    genre: z.string().min(3).max(50).optional(),

    characters: z.string().min(10).max(100).optional(),

    epilogue: z.string().min(10).max(100).optional(),

    text: z.string().min(100).max(2000).optional(),

});