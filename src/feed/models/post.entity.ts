import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movie_post')

export class MoviePostEntity{
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    title: string;

    @Column()
    image: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}