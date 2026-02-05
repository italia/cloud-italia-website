import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Finalize models/block models");

  console.log('Update block model "Cards blockquote" (`list_blockquote`)');
  await client.itemTypes.update("CUjz6lUdSTam7sSU7fqWGw", {
    name: "Cards blockquote",
  });

  console.log('Update block model "Related list" (`related_article`)');
  await client.itemTypes.update("HZqkL_jAQhOLDzlnGQ2pDg", {
    name: "Related list",
  });

  console.log(
    'Update block model "Cards editorial with icon" (`list_card_editorial_with_icon`)',
  );
  await client.itemTypes.update("IRda12RgS6maZGJoAyWaKw", {
    name: "Cards editorial with icon",
  });

  console.log('Update block model "Resources list" (`quick_link_card`)');
  await client.itemTypes.update("IzWzz4YeQcqJ7J34Xie2xg", {
    name: "Resources list",
  });

  console.log('Update block model "Image thumb single" (`image_block`)');
  await client.itemTypes.update("Lx5afhIlRzS2IxfP0urtSA", {
    name: "Image thumb single",
  });

  console.log('Update block model "Cards info" (`list_card_info`)');
  await client.itemTypes.update("NUwINVMPRTCl0alUb9zAag", {
    name: "Cards info",
  });

  console.log(
    'Update block model "Metadata content container" (`topics_block`)',
  );
  await client.itemTypes.update("SYB-ZWCvQq2KdO_yrUxS2g", {
    name: "Metadata content container",
  });

  console.log('Update block model "Card info and service" (`external_link`)');
  await client.itemTypes.update("fhF1HPNNQlKNy5KNGfLtuw", {
    name: "Card info and service",
  });

  console.log("Manage menu items");

  console.log('Create menu item "Contenuti"');
  await client.menuItems.create({
    id: "Bocx5dPPREi93woxMR6XeA",
    label: "Contenuti",
  });

  console.log('Create menu item "Layout globale"');
  await client.menuItems.create({
    id: "MYM_yoK5TZS7098qxbujYg",
    label: "Layout globale",
  });

  console.log('Create menu item "Grafici"');
  await client.menuItems.create({
    id: "TUOmtBcSRU2OUPvnUXBNDQ",
    label: "Grafici",
  });

  console.log('Create menu item "Pagine standard"');
  await client.menuItems.create({
    id: "TnYBFD4EQmu83vGNhLJaNw",
    label: "Pagine standard",
    parent: { id: "BobizXeTQfmwLKEJ1r0Vpg", type: "menu_item" },
  });

  console.log('Create menu item "Guide"');
  await client.menuItems.create({
    id: "CuadthmbT_esi5VV5l_N4A",
    label: "Guide",
    parent: { id: "Bocx5dPPREi93woxMR6XeA", type: "menu_item" },
  });

  console.log('Create menu item "Webinar"');
  await client.menuItems.create({
    id: "GHKJ1kfCSTqWtw900Tgq2w",
    label: "Webinar",
    parent: { id: "Bocx5dPPREi93woxMR6XeA", type: "menu_item" },
  });

  console.log('Create menu item "Approfondimenti"');
  await client.menuItems.create({
    id: "NWO1ME1MQAWflfwOnGcCkQ",
    label: "Approfondimenti",
    parent: { id: "Bocx5dPPREi93woxMR6XeA", type: "menu_item" },
  });

  console.log('Create menu item "Notizie"');
  await client.menuItems.create({
    id: "O75KPv-JQsahJ9TbZ_hd_Q",
    label: "Notizie",
    parent: { id: "Bocx5dPPREi93woxMR6XeA", type: "menu_item" },
  });

  console.log('Create menu item "Storie in evidenza"');
  await client.menuItems.create({
    id: "SF3QYUoPS-SA8qFDRWfZMA",
    label: "Storie in evidenza",
    parent: { id: "Bocx5dPPREi93woxMR6XeA", type: "menu_item" },
  });

  console.log('Create menu item "Materiali e strumenti"');
  await client.menuItems.create({
    id: "dEfittUwTb64JZGR_S2BJQ",
    label: "Materiali e strumenti",
    parent: { id: "Bocx5dPPREi93woxMR6XeA", type: "menu_item" },
  });

  console.log('Update menu item "Kpi"');
  await client.menuItems.update("LIwRWOpQQECyaYrqSGiBMQ", {
    label: "Kpi",
    position: 0,
    parent: { id: "TUOmtBcSRU2OUPvnUXBNDQ", type: "menu_item" },
  });

  console.log('Update menu item "Grafico"');
  await client.menuItems.update("bjspyoyVTEGJduGtFooexQ", {
    label: "Grafico",
    position: 1,
    parent: { id: "TUOmtBcSRU2OUPvnUXBNDQ", type: "menu_item" },
  });

  console.log('Update menu item "Card notizie"');
  await client.menuItems.update("PyJgxFm1Q-mswW_XEAE8uw", {
    label: "Card notizie",
    position: 0,
    parent: { id: "O75KPv-JQsahJ9TbZ_hd_Q", type: "menu_item" },
  });

  console.log('Update menu item "Articoli Storie in evidenza"');
  await client.menuItems.update("BMMlPr32TAq_T_l7xOLa2A", {
    label: "Articoli Storie in evidenza",
    position: 0,
    parent: { id: "SF3QYUoPS-SA8qFDRWfZMA", type: "menu_item" },
  });

  console.log('Update menu item "Pagine di tipo Catalogo"');
  await client.menuItems.update("MnQ-DdT-TAyX96_elubX8w", {
    label: "Pagine di tipo Catalogo",
    position: 1,
    parent: { id: "BobizXeTQfmwLKEJ1r0Vpg", type: "menu_item" },
  });

  console.log('Update menu item "Pagine webinar"');
  await client.menuItems.update("dLd4yz66SY2k82xzXOW7nA", {
    label: "Pagine webinar",
    position: 0,
    parent: { id: "GHKJ1kfCSTqWtw900Tgq2w", type: "menu_item" },
  });

  console.log('Update menu item "Sidebar for articles"');
  await client.menuItems.update("CHphZZXDTwOCsGs__tQ8FQ", {
    position: 0,
    parent: { id: "MYM_yoK5TZS7098qxbujYg", type: "menu_item" },
  });

  console.log('Update menu item "Risorse"');
  await client.menuItems.update("N0n9Z7gcQg6GOOuNJQ7SSg", {
    label: "Risorse",
    position: 0,
    parent: { id: "dEfittUwTb64JZGR_S2BJQ", type: "menu_item" },
  });

  console.log('Update menu item "Fasi per filtri"');
  await client.menuItems.update("VDVsapglRZSNy8cHDZ6lWQ", {
    label: "Fasi per filtri",
    position: 2,
    parent: { id: "dEfittUwTb64JZGR_S2BJQ", type: "menu_item" },
  });

  console.log('Update menu item "Relatori webinar"');
  await client.menuItems.update("V-NIj8MdTUWMyggA1lNXBw", {
    label: "Relatori webinar",
    position: 2,
    parent: { id: "GHKJ1kfCSTqWtw900Tgq2w", type: "menu_item" },
  });

  console.log('Update menu item "Cataloghi"');
  await client.menuItems.update("Y55A4nbyTI2Fdfi6MrzZSQ", {
    label: "Cataloghi",
    position: 0,
    parent: { id: "MnQ-DdT-TAyX96_elubX8w", type: "menu_item" },
  });

  console.log('Update menu item "Attori coinvolti"');
  await client.menuItems.update("Dqm8812GTQSOAOatApJ_-A", {
    label: "Attori coinvolti",
    position: 1,
    parent: { id: "CuadthmbT_esi5VV5l_N4A", type: "menu_item" },
  });

  console.log('Update menu item "Articoli"');
  await client.menuItems.update("L_1jgsjHQnekRcgDmxQRlw", {
    label: "Articoli",
    position: 0,
    parent: { id: "NWO1ME1MQAWflfwOnGcCkQ", type: "menu_item" },
  });

  console.log('Update menu item "Argomenti degli articoli"');
  await client.menuItems.update("OOFYAym5RSCMdNcfgUC_bA", {
    label: "Argomenti degli articoli",
    position: 1,
    parent: { id: "NWO1ME1MQAWflfwOnGcCkQ", type: "menu_item" },
  });

  console.log('Update menu item "Pagina di ricerca"');
  await client.menuItems.update("Qo0nr2ewReygHgmsAcmA3Q", {
    label: "Pagina di ricerca",
    position: 2,
    parent: { id: "TnYBFD4EQmu83vGNhLJaNw", type: "menu_item" },
  });

  console.log('Update menu item "Tipologia di ente"');
  await client.menuItems.update("R6u6kBzMROy059sqS0_iRA", {
    label: "Tipologia di ente",
    position: 1,
    parent: { id: "SF3QYUoPS-SA8qFDRWfZMA", type: "menu_item" },
  });

  console.log('Update menu item "Argomenti notizie"');
  await client.menuItems.update("d7nNSrRvSDqKe-vmE07Vxw", {
    label: "Argomenti notizie",
    position: 1,
    parent: { id: "O75KPv-JQsahJ9TbZ_hd_Q", type: "menu_item" },
  });

  console.log('Update menu item "Pagine guide"');
  await client.menuItems.update("E_iLgSkZS9KKuMjaBBQBuw", {
    label: "Pagine guide",
    position: 0,
    parent: { id: "CuadthmbT_esi5VV5l_N4A", type: "menu_item" },
  });

  console.log('Update menu item "Argomenti webinar"');
  await client.menuItems.update("F3_FTDpHTq-RHvjMw_z-xg", {
    label: "Argomenti webinar",
    position: 1,
    parent: { id: "GHKJ1kfCSTqWtw900Tgq2w", type: "menu_item" },
  });

  console.log('Update menu item "Tipologia di risorse"');
  await client.menuItems.update("F7O_g9p7QUGFk2jYrIqoYQ", {
    label: "Tipologia di risorse",
    position: 1,
    parent: { id: "dEfittUwTb64JZGR_S2BJQ", type: "menu_item" },
  });

  console.log('Update menu item "Homepage"');
  await client.menuItems.update("M3H4n0v-TyiJItASDqGRLw", {
    parent: { id: "TnYBFD4EQmu83vGNhLJaNw", type: "menu_item" },
  });

  console.log('Update menu item "Header + Footer"');
  await client.menuItems.update("Wn8JsOFrSQitHeuOGHJqng", {
    label: "Header + Footer",
    parent: { id: "MYM_yoK5TZS7098qxbujYg", type: "menu_item" },
  });

  console.log('Update menu item "Pagine I livello"');
  await client.menuItems.update("d0X4UgT1SbGeqBmmBso5Zg", {
    label: "Pagine I livello",
    parent: { id: "TnYBFD4EQmu83vGNhLJaNw", type: "menu_item" },
  });

  console.log('Update menu item "Layout globale"');
  await client.menuItems.update("MYM_yoK5TZS7098qxbujYg", { position: 1 });

  console.log('Update menu item "Contenuti"');
  await client.menuItems.update("Bocx5dPPREi93woxMR6XeA", { position: 4 });

  console.log('Update menu item "Grafici"');
  await client.menuItems.update("TUOmtBcSRU2OUPvnUXBNDQ", { position: 7 });

  console.log('Update menu item "Materiali e strumenti"');
  await client.menuItems.update("dEfittUwTb64JZGR_S2BJQ", { position: 1 });

  console.log('Update menu item "Guide"');
  await client.menuItems.update("CuadthmbT_esi5VV5l_N4A", { position: 5 });

  console.log('Update menu item "Approfondimenti"');
  await client.menuItems.update("NWO1ME1MQAWflfwOnGcCkQ", { position: 0 });

  console.log('Update menu item "Storie in evidenza"');
  await client.menuItems.update("SF3QYUoPS-SA8qFDRWfZMA", { position: 3 });

  console.log('Update menu item "Pagine standard"');
  await client.menuItems.update("TnYBFD4EQmu83vGNhLJaNw", { position: 2 });

  console.log('Update menu item "Impostazioni globali"');
  await client.menuItems.update("DcAdX_JhR4e7A7_he8L45Q", {
    label: "Impostazioni globali",
  });

  console.log('Update menu item "Webinar"');
  await client.menuItems.update("GHKJ1kfCSTqWtw900Tgq2w", { position: 2 });

  console.log('Update menu item "Notizie"');
  await client.menuItems.update("O75KPv-JQsahJ9TbZ_hd_Q", { position: 4 });

  console.log("Manage schema menu items");

  console.log(
    'Create block schema menu item "Components Articles and Resources"',
  );
  await client.schemaMenuItems.create({
    id: "VAm7EnFdQduM8T51t9jihw",
    label: "Components Articles and Resources",
    kind: "modular_block",
  });

  console.log(
    'Create block schema menu item "Components Home and Standard Pages"',
  );
  await client.schemaMenuItems.create({
    id: "N98z0TCPROK9ijNG3DlE2A",
    label: "Components Home and Standard Pages",
    kind: "modular_block",
  });

  console.log('Create block schema menu item "Components Catalogue Pages"');
  await client.schemaMenuItems.create({
    id: "PHPtVvVcT6Sm8UP585yU1A",
    label: "Components Catalogue Pages",
    kind: "modular_block",
  });

  console.log('Create block schema menu item "Components Global Settings"');
  await client.schemaMenuItems.create({
    id: "B9pAqZC-R_aNW2aep_TvTg",
    label: "Components Global Settings",
    kind: "modular_block",
  });

  console.log(
    'Update block schema menu item for block model "Cards section with tab" (`news_feed`)',
  );
  await client.schemaMenuItems.update("KlSClmGSTbqdG28Cs5bjBQ", {
    position: 2,
    parent: { id: "N98z0TCPROK9ijNG3DlE2A", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Cards hub with filter" (`catalogue_feed`)',
  );
  await client.schemaMenuItems.update("YfEMkvMcRWmjmhKg0qyL8g", {
    position: 0,
    parent: { id: "PHPtVvVcT6Sm8UP585yU1A", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Data section" (`data_section`)',
  );
  await client.schemaMenuItems.update("AguZ5EIcT8WlgEHIA0HlUA", {
    position: 3,
    parent: { id: "N98z0TCPROK9ijNG3DlE2A", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Cards container" (`use_case_container`)',
  );
  await client.schemaMenuItems.update("W7b1CKcGSQ6uRh6NQqj93A", {
    position: 0,
    parent: { id: "N98z0TCPROK9ijNG3DlE2A", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Webinar description" (`webinar_description`)',
  );
  await client.schemaMenuItems.update("VFfedyCrTH6t8fPZfTdZtw", {
    position: 11,
    parent: { id: "VAm7EnFdQduM8T51t9jihw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Cards container with filter" (`topic_filter`)',
  );
  await client.schemaMenuItems.update("J9LwdWJoRtSG18QU--RoSQ", {
    position: 1,
    parent: { id: "N98z0TCPROK9ijNG3DlE2A", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "FAQ section" (`faq_section`)',
  );
  await client.schemaMenuItems.update("LCLV3EV8R0aKJVwrkNzG8Q", {
    position: 4,
    parent: { id: "N98z0TCPROK9ijNG3DlE2A", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Text + speakers" (`speaker`)',
  );
  await client.schemaMenuItems.update("FS8d22ULR-6hRFZ5AWBAYw", {
    position: 10,
    parent: { id: "VAm7EnFdQduM8T51t9jihw", type: "schema_menu_item" },
  });

  console.log('Update block schema menu item for block model "Hero" (`hero`)');
  await client.schemaMenuItems.update("U9KVb64sTd2zAezRlNUdqA", {
    position: 5,
    parent: { id: "N98z0TCPROK9ijNG3DlE2A", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Text + statistic" (`text_statistic`)',
  );
  await client.schemaMenuItems.update("FxgdAndxTm6ePeuM4ZP1RQ", {
    position: 11,
    parent: { id: "N98z0TCPROK9ijNG3DlE2A", type: "schema_menu_item" },
  });

  console.log('Update block schema menu item "Sidebar"');
  await client.schemaMenuItems.update("PeVoXx9aRvCp_42ylyH9Aw", {
    position: 0,
    parent: { id: "B9pAqZC-R_aNW2aep_TvTg", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Support channels section" (`support_channels_section`)',
  );
  await client.schemaMenuItems.update("SfjP0Ui_TCCRmYMcoV_pdg", {
    parent: { id: "N98z0TCPROK9ijNG3DlE2A", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Resources list" (`quick_link_card`)',
  );
  await client.schemaMenuItems.update("Jxuqc3SjRoyqBlDawPP-nQ", {
    position: 9,
    parent: { id: "VAm7EnFdQduM8T51t9jihw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Cards info" (`list_card_info`)',
  );
  await client.schemaMenuItems.update("WdN-QQOtSyCHF2sMmL1Jow", {
    position: 2,
    parent: { id: "VAm7EnFdQduM8T51t9jihw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Text + cards" (`text_use_case`)',
  );
  await client.schemaMenuItems.update("eSIIWoV8SAuJbWboAKZZXQ", {
    position: 9,
    parent: { id: "N98z0TCPROK9ijNG3DlE2A", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Topic" (`topic`)',
  );
  await client.schemaMenuItems.update("R0uPMmHIQLCaVeNZFLpKgA", {
    position: 1,
    parent: { id: "LIGiN-0eTfea06jXmCO0vA", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Webinar transcript" (`action_card`)',
  );
  await client.schemaMenuItems.update("N-597IvQSQO5UKj1rx-ijg", {
    position: 12,
    parent: { id: "VAm7EnFdQduM8T51t9jihw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Related list" (`related_article`)',
  );
  await client.schemaMenuItems.update("ANJ3YlVxSZGuAx15r89iZQ", {
    position: 8,
    parent: { id: "VAm7EnFdQduM8T51t9jihw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Text + image" (`text_image`)',
  );
  await client.schemaMenuItems.update("EAa8ER66QkirXaJUzL2AOw", {
    position: 10,
    parent: { id: "N98z0TCPROK9ijNG3DlE2A", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Cards blockquote" (`list_blockquote`)',
  );
  await client.schemaMenuItems.update("TF-NjN-qQPi3TUVX-fSJrg", {
    position: 0,
    parent: { id: "VAm7EnFdQduM8T51t9jihw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Cards editorial with icon" (`list_card_editorial_with_icon`)',
  );
  await client.schemaMenuItems.update("PNt7jML8TVWRAWQ9mSYuvg", {
    position: 1,
    parent: { id: "VAm7EnFdQduM8T51t9jihw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Metadata content container" (`topics_block`)',
  );
  await client.schemaMenuItems.update("B3if2r9gQF6bP2iLQB9gPg", {
    position: 5,
    parent: { id: "VAm7EnFdQduM8T51t9jihw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Image thumb single" (`image_block`)',
  );
  await client.schemaMenuItems.update("A6nqbkOoRX2kMKNE455MIQ", {
    position: 3,
    parent: { id: "VAm7EnFdQduM8T51t9jihw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Ordered list" (`ordered_list`)',
  );
  await client.schemaMenuItems.update("S9X1Z-S0Ts2GFv8Jgw5Vrw", {
    position: 7,
    parent: { id: "VAm7EnFdQduM8T51t9jihw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Text + accordion" (`text_accordion`)',
  );
  await client.schemaMenuItems.update("aXf5VlQ1QnaKh5E9PnYIug", {
    position: 8,
    parent: { id: "N98z0TCPROK9ijNG3DlE2A", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Search bar" (`search_bar`)',
  );
  await client.schemaMenuItems.update("SHvG-TV5QI2s6exH2nshOw", {
    position: 1,
    parent: { id: "B9pAqZC-R_aNW2aep_TvTg", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Support CTA section" (`support_cta_section`)',
  );
  await client.schemaMenuItems.update("CKmE2GQsQ-q4CUjmMfSiRw", {
    position: 7,
    parent: { id: "N98z0TCPROK9ijNG3DlE2A", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Intro article" (`intro_article`)',
  );
  await client.schemaMenuItems.update("e79HorYlQfWZKQqKEwki_A", {
    position: 4,
    parent: { id: "VAm7EnFdQduM8T51t9jihw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Card info and service" (`external_link`)',
  );
  await client.schemaMenuItems.update("WvjRSKZ3TTCDVqhXOIZ7FA", {
    parent: { id: "VAm7EnFdQduM8T51t9jihw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Note" (`callout`)',
  );
  await client.schemaMenuItems.update("Gws7JQGnQ8WYSc3VoqJr2g", {
    position: 6,
    parent: { id: "VAm7EnFdQduM8T51t9jihw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item "Components Home and Standard Pages"',
  );
  await client.schemaMenuItems.update("N98z0TCPROK9ijNG3DlE2A", {
    position: 4,
  });

  console.log('Update block schema menu item "Components Catalogue Pages"');
  await client.schemaMenuItems.update("PHPtVvVcT6Sm8UP585yU1A", {
    position: 6,
  });

  console.log('Update block schema menu item "Components Global Settings"');
  await client.schemaMenuItems.update("B9pAqZC-R_aNW2aep_TvTg", {
    position: 7,
  });

  console.log(
    'Update block schema menu item "Components Articles and Resources"',
  );
  await client.schemaMenuItems.update("VAm7EnFdQduM8T51t9jihw", {
    position: 5,
  });

  console.log(
    'Update model schema menu item for model "Global setting" (`global_setting`)',
  );
  await client.schemaMenuItems.update("Jp4buk4gRvuY-GR3I3c6bw", {
    position: 31,
  });

  console.log('Update model schema menu item for model "Lang" (`lang`)');
  await client.schemaMenuItems.update("d_cfpGK1Qd-gPD1Wj1lVbg", {
    position: 29,
  });

  console.log(
    'Update block schema menu item for block model "Internal link" (`internal_link`)',
  );
  await client.schemaMenuItems.update("bl5SfY47T3O2riKCWSdkkQ", {
    position: 33,
  });

  console.log('Update block schema menu item "Section block"');
  await client.schemaMenuItems.update("GfAca4qoTAegUR6oaGmmxQ", {
    position: 8,
  });

  console.log(
    'Update block schema menu item for block model "Download link" (`download_link`)',
  );
  await client.schemaMenuItems.update("OcTQpYdxREafOJ0nYnTJZA", {
    position: 32,
  });

  console.log('Update model schema menu item "Webinar"');
  await client.schemaMenuItems.update("C-EXbRV_TfOQEvjqKoJ-Ew", {
    position: 21,
  });

  console.log('Update model schema menu item "Story"');
  await client.schemaMenuItems.update("HajK_tQXSGKJ5foj8eu1jQ", {
    position: 22,
  });

  console.log('Update model schema menu item "News"');
  await client.schemaMenuItems.update("Tk0nCGLoTRehKT5ZSXBz5A", {
    position: 23,
  });

  console.log('Update model schema menu item "Layout globale"');
  await client.schemaMenuItems.update("LnrI3CfSQj-zgKTdFatgHQ", {
    label: "Layout globale",
  });

  console.log('Update model schema menu item "Chart"');
  await client.schemaMenuItems.update("D63GZe7CSX6xqQmqjQtG9Q", {
    position: 17,
  });

  console.log(
    'Update model schema menu item for model "Schema migration" (`schema_migration`)',
  );
  await client.schemaMenuItems.update("OfZFdzftQBCRJllOPQzjjA", {
    position: 30,
  });

  console.log('Update model schema menu item "Insight"');
  await client.schemaMenuItems.update("Q96U2sdZQ3yes8_lF6EUcA", {
    position: 18,
  });
}
