import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAmount extends Struct.ComponentSchema {
  collectionName: 'components_shared_amounts';
  info: {
    displayName: 'Recipe Amount';
    icon: 'sun';
  };
  attributes: {
    level: Schema.Attribute.Enumeration<['less', 'normal', 'more']>;
    value: Schema.Attribute.Decimal;
  };
}

export interface SharedIgrendient extends Struct.ComponentSchema {
  collectionName: 'components_shared_igrendients';
  info: {
    displayName: 'Recipe Ingrendient';
    icon: 'bulletList';
  };
  attributes: {
    Amount: Schema.Attribute.Component<'shared.amount', true>;
    name: Schema.Attribute.String;
    unit: Schema.Attribute.Enumeration<['cm', 'gram', 'ml', 'pcs']>;
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

export interface SharedStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    displayName: 'Recipe Step';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    duration: Schema.Attribute.Integer;
    stage: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTool extends Struct.ComponentSchema {
  collectionName: 'components_shared_tools';
  info: {
    displayName: 'Recipe Tool';
    icon: 'restaurant';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.amount': SharedAmount;
      'shared.igrendient': SharedIgrendient;
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.step': SharedStep;
      'shared.tool': SharedTool;
    }
  }
}
