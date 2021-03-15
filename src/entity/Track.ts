import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Track {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable:true
    })
    car_name: string;

    @Column({
        nullable:true
    })
    car_no:string;

    @Column({
        type:'double',
        name:'lat',
        nullable:true
    })
    lat: number;

    @Column({
        type:'double',
        name:'lng',
        nullable:true
    })
    lng: number;

}
