import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToMany } from 'typeorm';
import { Password } from 'src/pass-handler/entities/pass-handler.entity';

@Entity('users') //ponemos el nombre 'users'
export class User {

    @PrimaryGeneratedColumn('uuid') //si no pongo el uuid, sería una secuencia de números tal cual
    id: string; //es mejor utilizar un id único que no vaya a cambiar desde su creación. El correo electrónico no es un identificador único porque puede cambiar.

    @Column( 'text', {
        unique: true,
    })
    email: string;

    @Column('text', {
        select: false,
    })
    password: string;

    @Column('text')
    fullName: string;

    @Column('bool', {
        default: true,
    })
    isActive: boolean;

    @Column('text', {
        default: 'individual' //Tipos: individual, profesional, pyme, organización
    })
    userType: string;

    @BeforeInsert()
    checkFieldsBeforeInsert(){
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate(){
        this.email = this.email.toLowerCase().trim();
    }

    @OneToMany(
        //¿cómo se va a relacionar?:
        //1. Citamos la entidad con la que se relaciona, la tabla a la que quiero apuntar
        () => Password,
        //2. ¿Cómo se relaciona mi instancia de users con esta tabla?. Ponemos el atributo o propiedad "user" que debería estar en la entidad "Password"
        (Password) => Password.user,
    )
    passwords: Password[];

}
