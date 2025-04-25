export interface OnlyModuleId {
  module_id: string;
}
export interface Module extends OnlyModuleId {
  name: string;
}

export interface UpdateModuleDTO extends OnlyModuleId {
  new_name: string;
}
