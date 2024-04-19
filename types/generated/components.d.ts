import type { Schema, Attribute } from '@strapi/strapi';

export interface EquipoEquipo extends Schema.Component {
  collectionName: 'components_equipo_equipos';
  info: {
    displayName: 'Equipo';
    icon: 'alien';
  };
  attributes: {
    Imagen: Attribute.Media;
    NombreApellido: Attribute.String;
    Cargo: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'equipo.equipo': EquipoEquipo;
    }
  }
}
