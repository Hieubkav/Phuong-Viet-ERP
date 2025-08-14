
import type { ReactNode, ComponentType } from 'react';

export interface NavItem {
  label: string;
  href: string;
  component: ComponentType;
  children?: NavItem[];
  icon?: ReactNode;
}
