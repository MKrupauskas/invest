---
title: Contact
sections:
  - type: hero_section
    title: Get in touch
    subtitle: >-
      Have a question? Send us a note using the form below and we will be in
      touch soon.
    align: center
    padding_top: small
    padding_bottom: small
    has_border: true
    background_color: none
  - type: form_section
    content:
    content_align: left
    form_position: right
    form_width: fifty
    form_layout: inline
    enable_card: true
    form_id: contactForm
    form_fields:
      - input_type: text
        name: name
        label: Name
        default_value: Your name
        is_required: true
      - input_type: email
        name: email
        label: Email
        default_value: Your email address
        is_required: true
      - input_type: select
        name: subject
        label: Subject
        default_value: Please select
        options:
          - Error on the site
          - Sponsorship
          - Other
      - input_type: textarea
        name: message
        label: Message
        default_value: Your message
      - input_type: checkbox
        name: consent
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
        is_required: true
    submit_label: Send Message
    align_vert: top
    padding_top: medium
    padding_bottom: medium
    background_color: primary
  - type: grid_section
    grid_items:
      - title: Partnering and Sponsorships
        title_align: center
        content: >-
          Ac felis donec et odio pellentesque. Sagittis vitae et leo duis ut
          diam.
        content_align: center
        actions:
          - label: Get Support
            url: /general-enquiries
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
        actions_align: center
        image: images/classic/icon-2.svg
        image_position: top
        image_align: center
        image_has_padding: true
      - title: Help & Support
        title_align: center
        content: >-
          Ac felis donec et odio pellentesque. Sagittis vitae et leo duis ut
          diam quam nulla.
        content_align: center
        actions:
          - label: Get Support
            url: /general-enquiries
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
        actions_align: center
        image: images/classic/icon-1.svg
        image_position: top
        image_align: center
        image_has_padding: true
      - title: Other Queries
        title_align: center
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel.
        content_align: center
        actions:
          - label: Get Support
            url: /general-enquiries
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
        actions_align: center
        image: images/classic/icon-5.svg
        image_position: top
        image_align: center
        image_has_padding: true
    grid_cols: three
    grid_gap_horiz: medium
    grid_gap_vert: medium
    enable_cards: true
    align: center
    padding_top: large
    padding_bottom: large
    background_color: primary
template: advanced
---
