import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Game extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column('varchar')
    name: string;

    @Field()
    @Column('varchar')
    genre: string;

    @Field(() => Int)
    @Column('int', {name: 'minimum_age', default: 13})
    minimumAge: Number;

}