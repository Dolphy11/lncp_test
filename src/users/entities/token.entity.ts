import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Token{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    user_id: number;
    @Column()
    token: string;
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
    @CreateDateColumn()
    expiredAt: Date;
}