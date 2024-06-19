import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiActivityMasterActivityMaster extends Schema.CollectionType {
  collectionName: 'activity_masters';
  info: {
    singularName: 'activity-master';
    pluralName: 'activity-masters';
    displayName: 'activity_master';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activity_title: Attribute.String & Attribute.Required;
    activity_type: Attribute.Relation<
      'api::activity-master.activity-master',
      'oneToOne',
      'api::activity-type.activity-type'
    >;
    activity_no_of_users: Attribute.Integer & Attribute.Required;
    activity_device: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    activity_mode: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    layout: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    activity_start_range: Attribute.Integer & Attribute.Required;
    activity_end_range: Attribute.Integer & Attribute.Required;
    activity_password: Attribute.Integer & Attribute.Required;
    time: Attribute.Integer & Attribute.Required;
    user_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::activity-master.activity-master',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::activity-master.activity-master',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiActivityTransactionActivityTransaction
  extends Schema.CollectionType {
  collectionName: 'activity_transactions';
  info: {
    singularName: 'activity-transaction';
    pluralName: 'activity-transactions';
    displayName: 'activity_transaction';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activity_transaction_id: Attribute.String &
      Attribute.Required &
      Attribute.Unique;
    activity_id: Attribute.Integer & Attribute.Required;
    activity_type_id: Attribute.Integer & Attribute.Required;
    activity_date: Attribute.Date & Attribute.Required;
    player1_name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    player2_name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    player3_name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    player4_name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    player1_attempt: Attribute.Integer & Attribute.Required;
    player2_attempt: Attribute.Integer & Attribute.Required;
    player3_attempt: Attribute.Integer & Attribute.Required;
    player4_attempt: Attribute.Integer & Attribute.Required;
    player1_correct: Attribute.Integer & Attribute.Required;
    player2_correct: Attribute.Integer & Attribute.Required;
    player3_correct: Attribute.Integer & Attribute.Required;
    player4_correct: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::activity-transaction.activity-transaction',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::activity-transaction.activity-transaction',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiActivityTypeActivityType extends Schema.CollectionType {
  collectionName: 'activity_types';
  info: {
    singularName: 'activity-type';
    pluralName: 'activity-types';
    displayName: 'activity_type';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::activity-type.activity-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::activity-type.activity-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiClockGameClockGame extends Schema.CollectionType {
  collectionName: 'clock_games';
  info: {
    singularName: 'clock-game';
    pluralName: 'clock-games';
    displayName: 'clock_game';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    clock_game_id: Attribute.Integer & Attribute.Required & Attribute.Unique;
    teacher_id: Attribute.Integer & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    duration: Attribute.Integer & Attribute.Required;
    player_count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 10;
        },
        number
      >;
    questions_count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 10;
        },
        number
      >;
    difficulty_level: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    select_type: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    password: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 9999;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::clock-game.clock-game',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::clock-game.clock-game',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDrawingGameDrawingGame extends Schema.CollectionType {
  collectionName: 'drawing_games';
  info: {
    singularName: 'drawing-game';
    pluralName: 'drawing-games';
    displayName: 'drawing_game';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    drawing_game_id: Attribute.Integer & Attribute.Required & Attribute.Unique;
    teacher_id: Attribute.Integer & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    player_count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 10;
        },
        number
      >;
    password: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 9999;
        },
        number
      >;
    share_status: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::drawing-game.drawing-game',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::drawing-game.drawing-game',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDrawingGamePictureDrawingGamePicture
  extends Schema.CollectionType {
  collectionName: 'drawing_game_pictures';
  info: {
    singularName: 'drawing-game-picture';
    pluralName: 'drawing-game-pictures';
    displayName: 'drawing_game_picture';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    drawing_game_picture_id: Attribute.Integer &
      Attribute.Required &
      Attribute.Unique;
    game_id: Attribute.Integer & Attribute.Required;
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::drawing-game-picture.drawing-game-picture',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::drawing-game-picture.drawing-game-picture',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJigsawGameJigsawGame extends Schema.CollectionType {
  collectionName: 'jigsaw_games';
  info: {
    singularName: 'jigsaw-game';
    pluralName: 'jigsaw-games';
    displayName: 'jigsaw_game';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jigsaw_game_id: Attribute.Integer & Attribute.Required & Attribute.Unique;
    teacher_id: Attribute.Integer & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    player_count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 10;
        },
        number
      >;
    difficulty_level: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    password: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 9999;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::jigsaw-game.jigsaw-game',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::jigsaw-game.jigsaw-game',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJigsawGamePictureJigsawGamePicture
  extends Schema.CollectionType {
  collectionName: 'jigsaw_game_pictures';
  info: {
    singularName: 'jigsaw-game-picture';
    pluralName: 'jigsaw-game-pictures';
    displayName: 'jigsaw_game_picture';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jigsaw_game_picture_id: Attribute.Integer &
      Attribute.Required &
      Attribute.Unique;
    game_id: Attribute.Integer & Attribute.Required;
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::jigsaw-game-picture.jigsaw-game-picture',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::jigsaw-game-picture.jigsaw-game-picture',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLoginLogin extends Schema.CollectionType {
  collectionName: 'logins';
  info: {
    singularName: 'login';
    pluralName: 'logins';
    displayName: 'login';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    login_id: Attribute.Integer & Attribute.Required & Attribute.Unique;
    user_id: Attribute.Integer & Attribute.Required;
    ip: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 15;
      }>;
    active: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<1>;
    error_code: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    last_activity: Attribute.DateTime & Attribute.Required;
    login_time: Attribute.DateTime & Attribute.Required;
    logout_time: Attribute.DateTime & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::login.login',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::login.login',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMatchingGameMatchingGame extends Schema.CollectionType {
  collectionName: 'matching_games';
  info: {
    singularName: 'matching-game';
    pluralName: 'matching-games';
    displayName: 'matching_game';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    matching_game_id: Attribute.Integer & Attribute.Required & Attribute.Unique;
    teacher_id: Attribute.Integer & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    duration: Attribute.Integer & Attribute.Required;
    player_count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 10;
        },
        number
      >;
    word_count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 10;
        },
        number
      >;
    password: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 9999;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::matching-game.matching-game',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::matching-game.matching-game',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMatchingGameWordMatchingGameWord
  extends Schema.CollectionType {
  collectionName: 'matching_game_words';
  info: {
    singularName: 'matching-game-word';
    pluralName: 'matching-game-words';
    displayName: 'matching_game_word';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    matching_game_word_id: Attribute.Integer &
      Attribute.Required &
      Attribute.Unique;
    matching_game_id: Attribute.Integer & Attribute.Required;
    word1: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    picture1: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    word2: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    picture2: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::matching-game-word.matching-game-word',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::matching-game-word.matching-game-word',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNumberGameNumberGame extends Schema.CollectionType {
  collectionName: 'number_games';
  info: {
    singularName: 'number-game';
    pluralName: 'number-games';
    displayName: 'number_game';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    number_game_id: Attribute.Integer & Attribute.Required;
    teacher_id: Attribute.Integer & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    type: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    device: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    level: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    player_count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 10;
        },
        number
      >;
    start: Attribute.Integer & Attribute.Required;
    end: Attribute.Integer & Attribute.Required;
    layout: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<1>;
    time: Attribute.Integer & Attribute.Required;
    password: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::number-game.number-game',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::number-game.number-game',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiQuizGameQuizGame extends Schema.CollectionType {
  collectionName: 'quiz_games';
  info: {
    singularName: 'quiz-game';
    pluralName: 'quiz-games';
    displayName: 'quiz_game';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    quiz_game_id: Attribute.Integer & Attribute.Required & Attribute.Unique;
    teacher_id: Attribute.Integer & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    duration: Attribute.Integer & Attribute.Required;
    player_count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 10;
        },
        number
      >;
    question_count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 10;
        },
        number
      >;
    is_random: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    password: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 9999;
        },
        number
      >;
    share_status: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::quiz-game.quiz-game',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::quiz-game.quiz-game',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiQuizGameQuestionQuizGameQuestion
  extends Schema.CollectionType {
  collectionName: 'quiz_game_questions';
  info: {
    singularName: 'quiz-game-question';
    pluralName: 'quiz-game-questions';
    displayName: 'quiz_game_question';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    quiz_game_question_id: Attribute.Integer & Attribute.Required;
    game_id: Attribute.Integer & Attribute.Required;
    position: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 20;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    question: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    answer_a: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    answer_b: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    answer_c: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    answer_d: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    correct_answer: Attribute.Enumeration<['A', 'B', 'C', 'D']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::quiz-game-question.quiz-game-question',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::quiz-game-question.quiz-game-question',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSpellerGameSpellerGame extends Schema.CollectionType {
  collectionName: 'speller_games';
  info: {
    singularName: 'speller-game';
    pluralName: 'speller-games';
    displayName: 'speller_game';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    speller_game_id: Attribute.Integer & Attribute.Required & Attribute.Unique;
    teacher_id: Attribute.Integer & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    duration: Attribute.Integer & Attribute.Required;
    player_count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 10;
        },
        number
      >;
    word_count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 30;
        },
        number
      >;
    difficulty_level: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    select_case: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    password: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 9999;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::speller-game.speller-game',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::speller-game.speller-game',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSpellerGameWordSpellerGameWord
  extends Schema.CollectionType {
  collectionName: 'speller_game_words';
  info: {
    singularName: 'speller-game-word';
    pluralName: 'speller-game-words';
    displayName: 'speller_game_word';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    speller_game_word_id: Attribute.Integer & Attribute.Required;
    matching_game_id: Attribute.Integer & Attribute.Required;
    word1: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    picture1: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::speller-game-word.speller-game-word',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::speller-game-word.speller-game-word',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTestTest extends Schema.CollectionType {
  collectionName: 'tests';
  info: {
    singularName: 'test';
    pluralName: 'tests';
    displayName: 'tests';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    email: Attribute.Email;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::test.test', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::test.test', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiUserMasterUserMaster extends Schema.CollectionType {
  collectionName: 'user_masters';
  info: {
    singularName: 'user-master';
    pluralName: 'user-masters';
    displayName: 'user_master';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    user_id: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent_id: Attribute.Integer;
    name: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    password: Attribute.Password & Attribute.Required;
    schoolName: Attribute.String & Attribute.Required;
    countryName: Attribute.String & Attribute.Required;
    level: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 100;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    maxChildren: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    date: Attribute.Date & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-master.user-master',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::user-master.user-master',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWordSearchGameWordSearchGame extends Schema.CollectionType {
  collectionName: 'word_search_games';
  info: {
    singularName: 'word-search-game';
    pluralName: 'word-search-games';
    displayName: 'word_search_game';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    word_search_game_id: Attribute.Integer &
      Attribute.Required &
      Attribute.Unique;
    teacher_id: Attribute.Integer & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    duration: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 999;
        },
        number
      >;
    case: Attribute.Enumeration<['UPPERCASE', 'lowercase']> &
      Attribute.Required;
    level: Attribute.Enumeration<['Easy', 'Intermediate', 'Hard']> &
      Attribute.Required;
    player_count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 10;
        },
        number
      >;
    word_count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 20;
        },
        number
      >;
    row_count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 20;
        },
        number
      >;
    column_count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 20;
        },
        number
      >;
    words: Attribute.String & Attribute.Required;
    password: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 9999;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::word-search-game.word-search-game',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::word-search-game.word-search-game',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::activity-master.activity-master': ApiActivityMasterActivityMaster;
      'api::activity-transaction.activity-transaction': ApiActivityTransactionActivityTransaction;
      'api::activity-type.activity-type': ApiActivityTypeActivityType;
      'api::clock-game.clock-game': ApiClockGameClockGame;
      'api::drawing-game.drawing-game': ApiDrawingGameDrawingGame;
      'api::drawing-game-picture.drawing-game-picture': ApiDrawingGamePictureDrawingGamePicture;
      'api::jigsaw-game.jigsaw-game': ApiJigsawGameJigsawGame;
      'api::jigsaw-game-picture.jigsaw-game-picture': ApiJigsawGamePictureJigsawGamePicture;
      'api::login.login': ApiLoginLogin;
      'api::matching-game.matching-game': ApiMatchingGameMatchingGame;
      'api::matching-game-word.matching-game-word': ApiMatchingGameWordMatchingGameWord;
      'api::number-game.number-game': ApiNumberGameNumberGame;
      'api::quiz-game.quiz-game': ApiQuizGameQuizGame;
      'api::quiz-game-question.quiz-game-question': ApiQuizGameQuestionQuizGameQuestion;
      'api::speller-game.speller-game': ApiSpellerGameSpellerGame;
      'api::speller-game-word.speller-game-word': ApiSpellerGameWordSpellerGameWord;
      'api::test.test': ApiTestTest;
      'api::user-master.user-master': ApiUserMasterUserMaster;
      'api::word-search-game.word-search-game': ApiWordSearchGameWordSearchGame;
    }
  }
}
