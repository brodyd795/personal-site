import {withSentryConfig} from '@sentry/nextjs';

// Any other exports must come before this. See @sentry/nextjs documentation.
module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
