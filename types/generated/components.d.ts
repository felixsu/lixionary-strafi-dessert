import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralPhysicalInformation extends Struct.ComponentSchema {
  collectionName: 'components_general_physical_informations';
  info: {
    displayName: 'Physical Information';
    icon: 'clock';
  };
  attributes: {
    diameter: Schema.Attribute.Integer;
    height: Schema.Attribute.Integer;
    length: Schema.Attribute.Integer;
    name: Schema.Attribute.String;
    ratio: Schema.Attribute.Decimal;
    weight: Schema.Attribute.Integer;
    width: Schema.Attribute.Integer;
  };
}

export interface GeneralPrice extends Struct.ComponentSchema {
  collectionName: 'components_general_prices';
  info: {
    displayName: 'Price';
    icon: 'priceTag';
  };
  attributes: {
    name: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

export interface RecipeAmount extends Struct.ComponentSchema {
  collectionName: 'components_recipe_amounts';
  info: {
    displayName: 'Amount';
  };
  attributes: {
    level: Schema.Attribute.Enumeration<['less', 'normal', 'more']>;
    value: Schema.Attribute.Decimal;
  };
}

export interface RecipeEquipment extends Struct.ComponentSchema {
  collectionName: 'components_recipe_equipment';
  info: {
    displayName: 'Equipment';
    icon: 'bell';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface RecipeIngrendient extends Struct.ComponentSchema {
  collectionName: 'components_recipe_ingrendients';
  info: {
    displayName: 'Ingrendient';
    icon: 'chartCircle';
  };
  attributes: {
    amount: Schema.Attribute.Component<'recipe.amount', true>;
    name: Schema.Attribute.String;
    unit: Schema.Attribute.Enumeration<['cm', 'gram', 'ml', 'pcs']>;
  };
}

export interface RecipeStep extends Struct.ComponentSchema {
  collectionName: 'components_recipe_steps';
  info: {
    displayName: 'Step';
    icon: 'filter';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    duration: Schema.Attribute.Integer;
    equipments: Schema.Attribute.Component<'recipe.equipment', true>;
    stage: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.physical-information': GeneralPhysicalInformation;
      'general.price': GeneralPrice;
      'recipe.amount': RecipeAmount;
      'recipe.equipment': RecipeEquipment;
      'recipe.ingrendient': RecipeIngrendient;
      'recipe.step': RecipeStep;
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
