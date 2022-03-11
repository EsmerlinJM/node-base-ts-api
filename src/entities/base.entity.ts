import {
    BaseEntity,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from "typeorm";

export abstract class Base extends BaseEntity {
    @PrimaryColumn()
    id!: number;

    @CreateDateColumn({ name: 'created_at', nullable: false })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at', nullable: false })
    updatedAt!: Date;

    @DeleteDateColumn({ name: 'deleted_at', nullable: false })
    deletedAt!: Date;
}