import { h } from "vue";
import { useRoute } from "vue-router";

import AutoLink from "@theme-weasel/components/common/AutoLink";
import { useIconPrefix } from "@theme-weasel/composables";
import { isActiveSidebarItem } from "@theme-weasel/modules/sidebar/utils";

import type { VNode } from "vue";
import type {
  ResolvedSidebarItem,
  ResolvedWeaselThemeSidebarHeaderItem,
  AutoLink as AutoLinkType,
} from "../../../../typings";

export const renderIcon = (icon?: string): VNode | null =>
  icon
    ? h("i", {
        class: ["icon", `${useIconPrefix().value}${icon}`],
      })
    : null;

export const renderItem = (
  config: ResolvedSidebarItem,
  props: VNode["props"]
): VNode =>
  config.link
    ? // if the item has link, render it as `<AutoLink>`
      h(AutoLink, {
        ...props,
        config: config as AutoLinkType,
      })
    : // if the item only has text, render it as `<p>`
      h("p", props, [renderIcon(config.icon), config.text]);

export const renderChildren = (
  children: ResolvedWeaselThemeSidebarHeaderItem[]
): VNode | null => {
  const route = useRoute();

  if (!children) return null;

  return h(
    "ul",
    { class: "sidebar-sub-headers" },
    children.map((child) => {
      const active = isActiveSidebarItem(route, child, true);

      return h("li", { class: "sidebar-sub-header" }, [
        renderItem(child, {
          class: ["sidebar-link", "heading", { active }],
        }),
        renderChildren(child.children),
      ]);
    })
  );
};