import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Multiple links field "Category" (`category`) in model "Resource" (`resource`)',
  );
  await client.fields.update("OvJ-Yv5vQICKA4eX0Sl8wA", { field_type: "links" });
  await client.fields.update("OvJ-Yv5vQICKA4eX0Sl8wA", {
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["PNzBtRKsSnKc90MAvnbrrA"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
  });
}
