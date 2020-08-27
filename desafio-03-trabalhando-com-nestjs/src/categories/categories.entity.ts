import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Categories {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    description: string;

}