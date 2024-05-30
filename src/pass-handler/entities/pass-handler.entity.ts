import { User } from 'src/authentication/entities/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToMany, ManyToOne } from 'typeorm';

@Entity('passwords')
export class Password {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column( 'text', {
        unique: true,
    })
    serviceName: string;

    @Column( 'text', {
        unique: false,
    })
    userName: string;

    @Column('text')
    password: string;

    @ManyToOne(
         //1. Citamos la entidad con la que se relaciona, la tabla a la que quiero apuntar
        () => User,
         //2. Relaciona de instancia de User con Password. Ponemos el atributo o propiedad "passwords" que está en la entidad "User"
        (user) => user.passwords,
        //Esto hará que cada vez que se haga una consulta de passwords, cargue automáticamente la relación
        { eager: true }
    )
    user: User
}
