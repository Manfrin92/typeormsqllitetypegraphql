import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import {Game} from "../entity/Game";

@Resolver()
export class GameResolver {
    @Mutation(() => Game)
    async createGame(
        @Arg('name') name: string,
        @Arg('genre') genre: string,
        @Arg('minimumAge', () => Int) minimumAge: number
    ) {
        
        const game = Game.create({
            name,
            genre,
            minimumAge
        });

        await Game.save(game);
        
        return game;

    }

    @Query(() => [Game])
    games() {
        return Game.find();
    }

}