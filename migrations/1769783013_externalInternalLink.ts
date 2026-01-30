import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Link" (`link_to`) in block model "Card presentation banner" (`channel`)',
  );
  await client.fields.create("boYJ_9tCSI6ARMr6HycKkA", {
    id: "UFUc0wObRhGei1sEW-f7Lw",
    label: "Link",
    field_type: "string",
    api_key: "link_to",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log("Destroy fields in existing models/block models");

  console.log(
    'Delete Single-line string field "Icon" (`icon`) in block model "Internal link" (`internal_link`)',
  );
  await client.fields.destroy("MwpWNuUERP-8Yg4v_nq3lg");

  console.log(
    'Delete Single-line string field "Title icon" (`titleicon`) in block model "Internal link" (`internal_link`)',
  );
  await client.fields.destroy("fjS0j0rPQQWpCP5HTXLBuA");

  console.log(
    'Delete Single-line string field "Title icon" (`title_icon`) in block model "External link" (`external_link`)',
  );
  await client.fields.destroy("OQBUw24BREOqOK9DA6Ns5w");

  console.log(
    'Delete Single-line string field "Icon" (`icon`) in block model "External link" (`external_link`)',
  );
  await client.fields.destroy("YmvRvNZjRG223Ko79tJGbQ");
}
