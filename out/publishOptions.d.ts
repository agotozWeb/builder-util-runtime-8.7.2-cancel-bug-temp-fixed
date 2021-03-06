/// <reference types="node" />
import { OutgoingHttpHeaders } from "http";
export declare type PublishProvider = "github" | "bintray" | "s3" | "spaces" | "generic" | "custom" | "snapStore";
export declare type AllPublishOptions = string | GithubOptions | S3Options | SpacesOptions | GenericServerOptions | BintrayOptions | CustomPublishOptions;
export interface PublishConfiguration {
    /**
     * The provider.
     */
    readonly provider: PublishProvider;
    /**
     * @private
     * win-only
     */
    publisherName?: Array<string> | null;
    /**
     * @private
     * win-only
     */
    readonly updaterCacheDirName?: string | null;
    /**
     * Whether to publish auto update info files.
     *
     * Auto update relies only on the first provider in the list (you can specify several publishers).
     * Thus, probably, there`s no need to upload the metadata files for the other configured providers. But by default will be uploaded.
     *
     * @default true
     */
    readonly publishAutoUpdate?: boolean;
    /**
     * Any custom request headers
     */
    readonly requestHeaders?: OutgoingHttpHeaders;
}
export interface CustomPublishOptions extends PublishConfiguration {
    [index: string]: any;
}
/**
 * [GitHub](https://help.github.com/articles/about-releases/) options.
 *
 * GitHub [personal access token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/) is required. You can generate by going to [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new). The access token should have the repo scope/permission.
 * Define `GH_TOKEN` environment variable.
 */
export interface GithubOptions extends PublishConfiguration {
    /**
     * The provider. Must be `github`.
     */
    readonly provider: "github";
    /**
     * The repository name. [Detected automatically](#github-repository-and-bintray-package).
     */
    readonly repo?: string | null;
    /**
     * The owner.
     */
    readonly owner?: string | null;
    /**
     * Whether to use `v`-prefixed tag name.
     * @default true
     */
    readonly vPrefixedTagName?: boolean;
    /**
     * The host (including the port if need).
     * @default github.com
     */
    readonly host?: string | null;
    /**
     * The protocol. GitHub Publisher supports only `https`.
     * @default https
     */
    readonly protocol?: "https" | "http" | null;
    /**
     * The access token to support auto-update from private github repositories. Never specify it in the configuration files. Only for [setFeedURL](/auto-update#appupdatersetfeedurloptions).
     */
    readonly token?: string | null;
    /**
     * Whether to use private github auto-update provider if `GH_TOKEN` environment variable is defined. See [Private GitHub Update Repo](/auto-update#private-github-update-repo).
     */
    readonly private?: boolean | null;
    /**
     * The type of release. By default `draft` release will be created.
     *
     * Also you can set release type using environment variable. If `EP_DRAFT`is set to `true` — `draft`, if `EP_PRE_RELEASE`is set to `true` — `prerelease`.
     * @default draft
     */
    releaseType?: "draft" | "prerelease" | "release" | null;
}
/** @private */
export declare function githubUrl(options: GithubOptions, defaultHost?: string): string;
/**
 * Generic (any HTTP(S) server) options.
 * In all publish options [File Macros](/file-patterns#file-macros) are supported.
 */
export interface GenericServerOptions extends PublishConfiguration {
    /**
     * The provider. Must be `generic`.
     */
    readonly provider: "generic";
    /**
     * The base url. e.g. `https://bucket_name.s3.amazonaws.com`.
     */
    readonly url: string;
    /**
     * The channel.
     * @default latest
     */
    readonly channel?: string | null;
    /**
     * Whether to use multiple range requests for differential update. Defaults to `true` if `url` doesn't contain `s3.amazonaws.com`.
     */
    readonly useMultipleRangeRequest?: boolean;
}
export interface BaseS3Options extends PublishConfiguration {
    /**
     * The update channel.
     * @default latest
     */
    channel?: string | null;
    /**
     * The directory path.
     * @default /
     */
    readonly path?: string | null;
    /**
     * The ACL. Set to `null` to not [add](https://github.com/electron-userland/electron-builder/issues/1822).
     *
     * @default public-read
     */
    readonly acl?: "private" | "public-read" | null;
}
export interface S3Options extends BaseS3Options {
    /**
     * The provider. Must be `s3`.
     */
    readonly provider: "s3";
    /**
     * The bucket name.
     */
    readonly bucket: string;
    /**
     * The region. Is determined and set automatically when publishing.
     */
    region?: string | null;
    /**
     * The ACL. Set to `null` to not [add](https://github.com/electron-userland/electron-builder/issues/1822).
     *
     * Please see [required permissions for the S3 provider](https://github.com/electron-userland/electron-builder/issues/1618#issuecomment-314679128).
     *
     * @default public-read
     */
    readonly acl?: "private" | "public-read" | null;
    /**
     * The type of storage to use for the object.
     * @default STANDARD
     */
    readonly storageClass?: "STANDARD" | "REDUCED_REDUNDANCY" | "STANDARD_IA" | null;
    /**
     * Server-side encryption algorithm to use for the object.
     */
    readonly encryption?: "AES256" | "aws:kms" | null;
    /**
     * The endpoint URI to send requests to. The default endpoint is built from the configured region.
     * The endpoint should be a string like `https://{service}.{region}.amazonaws.com`.
     */
    readonly endpoint?: string | null;
}
/**
 * [DigitalOcean Spaces](https://www.digitalocean.com/community/tutorials/an-introduction-to-digitalocean-spaces) options.
 * Access key is required, define `DO_KEY_ID` and `DO_SECRET_KEY` environment variables.
 */
export interface SpacesOptions extends BaseS3Options {
    /**
     * The provider. Must be `spaces`.
     */
    readonly provider: "spaces";
    /**
     * The space name.
     */
    readonly name: string;
    /**
     * The region (e.g. `nyc3`).
     */
    readonly region: string;
}
export declare function getS3LikeProviderBaseUrl(configuration: PublishConfiguration): string;
/**
 * [Bintray](https://bintray.com/) options. Requires an API key. An API key can be obtained from the user [profile](https://bintray.com/profile/edit) page ("Edit Your Profile" -> API Key).
 * Define `BT_TOKEN` environment variable.
 */
export interface BintrayOptions extends PublishConfiguration {
    /**
     * The provider. Must be `bintray`.
     */
    readonly provider: "bintray";
    /**
     * The Bintray package name.
     */
    readonly package?: string | null;
    /**
     * The Bintray repository name.
     * @default generic
     */
    readonly repo?: string | null;
    /**
     * The owner.
     */
    readonly owner?: string | null;
    /**
     * The Bintray component (Debian only).
     */
    readonly component?: string | null;
    /**
     * The Bintray distribution (Debian only).
     * @default stable
     */
    readonly distribution?: string | null;
    /**
     * The Bintray user account. Used in cases where the owner is an organization.
     */
    readonly user?: string | null;
    readonly token?: string | null;
}
