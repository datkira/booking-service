import { Module } from '@nestjs/common';
import { MapperService } from './mapper/mapper.service';
import { ConfigurationService } from './configuration/configuration.service';

@Module({
  providers: [MapperService, ConfigurationService],
  exports: [ConfigurationService, MapperService]
})
export class SharedModule {}
