import type { LocaleConfig } from "@vuepress/core";
import type { ActiveHeaderLinksPluginOptions } from "@vuepress/plugin-active-header-links";
import type { ContainerPluginOptions } from "@vuepress/plugin-container";
import type { GitPluginOptions } from "@vuepress/plugin-git";
import type {
  WeaselThemePluginsOptions,
  WeaselThemeOptions,
  WeaselThemeLocaleOptions,
} from "../../types";

/**
 * Resolve options for @vuepress/plugin-container
 *
 * For custom containers default title
 */
export const resolveContainerPluginOptions = (
  themePlugins: WeaselThemePluginsOptions,
  localeOptions: WeaselThemeOptions,
  type: "tip" | "warning" | "danger"
): ContainerPluginOptions | boolean => {
  if (themePlugins?.container?.[type] === false) return false;

  const locales = Object.entries(localeOptions.locales || {}).reduce(
    (result: LocaleConfig<{ defaultInfo: string }>, [key, value]) => {
      result[key] = {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        defaultInfo: value?.[type] ?? localeOptions[type],
      };
      return result;
    },
    {}
  );

  return {
    type,
    locales,
  };
};

/**
 * Resolve options for @vuepress/plugin-container
 *
 * For details container
 */
export const resolveContainerPluginOptionsForDetails = (
  themePlugins: WeaselThemePluginsOptions
): ContainerPluginOptions | boolean => {
  if (themePlugins?.container?.details === false) return false;

  return {
    type: "details",
    before: (info): string =>
      `<details class="custom-container details">${
        info ? `<summary>${info}</summary>` : ""
      }\n`,
    after: (): string => "</details>\n",
  };
};

/**
 * Resolve options for @vuepress/plugin-container
 *
 * For code-group container
 */
export const resolveContainerPluginOptionsForCodeGroup = (
  themePlugins: WeaselThemePluginsOptions
): ContainerPluginOptions | boolean => {
  if (themePlugins?.container?.codeGroup === false) return false;

  return {
    type: "code-group",
    before: (): string => `<CodeGroup>\n`,
    after: (): string => "</CodeGroup>\n",
  };
};

/**
 * Resolve options for @vuepress/plugin-container
 *
 * For code-group-item block
 */
export const resolveContainerPluginOptionsForCodeGroupItem = (
  themePlugins: WeaselThemePluginsOptions
): ContainerPluginOptions | boolean => {
  if (themePlugins?.container?.codeGroupItem === false) return false;

  return {
    type: "code-group-item",
    before: (info): string => `<CodeGroupItem title="${info}">\n`,
    after: (): string => "</CodeGroupItem>\n",
  };
};

/**
 * Resolve options for @vuepress/plugin-active-header-links
 */
export const resolveActiveHeaderLinksPluginOptions = (
  themePlugins: WeaselThemePluginsOptions
): ActiveHeaderLinksPluginOptions | boolean => {
  if (themePlugins?.activeHeaderLinks === false) return false;

  return {
    headerLinkSelector: ".sidebar-link",
    headerAnchorSelector: ".header-anchor",
  };
};

/**
 * Resolve options for @vuepress/plugin-git
 */
export const resolveGitPluginOptions = (
  themePlugins: WeaselThemePluginsOptions,
  localeOptions: WeaselThemeLocaleOptions
): GitPluginOptions | boolean => {
  if (themePlugins?.git === false) {
    return false;
  }

  const enableUpdatedTime = localeOptions.lastUpdated !== false;
  const enableContributors = localeOptions.contributors !== false;

  if (!enableUpdatedTime && !enableContributors) {
    return false;
  }

  return {
    createdTime: false,
    updatedTime: enableUpdatedTime,
    contributors: enableContributors,
  };
};
