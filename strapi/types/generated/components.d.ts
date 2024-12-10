import type { Struct, Schema } from '@strapi/strapi';

export interface FeaturesTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_features_testimonials';
  info: {
    displayName: 'testimonial';
    icon: 'archive';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    photo: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface FeaturesSpoiler extends Struct.ComponentSchema {
  collectionName: 'components_features_spoilers';
  info: {
    displayName: 'spoiler';
    icon: 'arrowDown';
  };
  attributes: {
    clickableText: Schema.Attribute.String;
    actualSpoiler: Schema.Attribute.Text;
  };
}

export interface FeaturesRichText extends Struct.ComponentSchema {
  collectionName: 'components_features_rich_texts';
  info: {
    displayName: 'richText';
    icon: 'book';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'features.testimonial': FeaturesTestimonial;
      'features.spoiler': FeaturesSpoiler;
      'features.rich-text': FeaturesRichText;
    }
  }
}
