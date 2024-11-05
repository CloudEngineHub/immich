import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSyncCheckpointTable1730742937135 implements MigrationInterface {
    name = 'AddSyncCheckpointTable1730742937135'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "session_sync_checkpoints" ("sessionId" uuid NOT NULL, "type" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "lastTimestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_b846ab547a702863ef7cd9412fb" PRIMARY KEY ("sessionId", "type"))`);
        await queryRunner.query(`ALTER TABLE "session_sync_checkpoints" ADD CONSTRAINT "FK_d8ddd9d687816cc490432b3d4bc" FOREIGN KEY ("sessionId") REFERENCES "sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "session_sync_checkpoints" DROP CONSTRAINT "FK_d8ddd9d687816cc490432b3d4bc"`);
        await queryRunner.query(`DROP TABLE "session_sync_checkpoints"`);
    }

}
