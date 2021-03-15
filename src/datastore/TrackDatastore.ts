import { Connection, getConnection, Repository } from "typeorm";
import { Track } from "../entity/Track";

export default class TrackDatastore {

    repository: Repository<Track>

    constructor() {
        this.repository = getConnection().getRepository(Track)
    }

    getTrack(): Promise<Track[] | undefined> {
        return this.repository.find({})
    }

    saveTrack(track: Track) {
        return this.repository.save(track)
    }
}