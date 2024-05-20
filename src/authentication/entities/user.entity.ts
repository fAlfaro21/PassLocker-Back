import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users') //ponemos el nombre 'users'
export class User {

    @ApiProperty({
        example: 'cd533345-f1f3-48c9-a62c-7dc2da50c8f8',
        description: 'User ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid') //si no pongo el uuid, sería una secuencia de números tal cual
    id: string; //es mejor utilizar un id único que no vaya a cambiar desde su creación. El correo electrónico no es un identificador único porque puede cambiar.

    @ApiProperty({
        example: 'emailsample@gmail.com',
        description: 'User email address',
        uniqueItems: true
    })
    @Column( 'text', {
        unique: true,
    })
    email: string;

    @Column('text', {
        select: false,
    })
    password: string;

    @ApiProperty({
        example: 'Pedro del Hierro',
        description: 'User fullname',
        minLength: 1
    })
    @Column('text')
    fullName: string;

    @ApiProperty({
        example: 'True',
        description: 'Is user active?',
        default: true
    })
    @Column('bool', {
        default: true,
    })
    isActive: boolean;

    @ApiProperty({
        example: 'individual',
        description: 'Type of user',
        default: 'individual'
    })
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

    //Todo Relación con tabla de contraseñas
/*     @OneToMany(
        //¿cómo se va a relacionar?:
        //1. Citamos la entidad con la que se relaciona, la tabla a la que quiero apuntar
        () => Product,
        //2. ¿Cómo se relaciona mi instancia de producto con esta tabla?. Ponemos el atributo o propiedad "user" que debería estar en la entidad "Product"
        (product) => product.user,
    )
    product: Product[]; */

}
