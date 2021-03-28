<template>
  <div>
      <InfoBanner>
        <h1>
          This is your personalised First Steps Checklist!
        </h1>
        <p>
          The list below outlines the things you will need to take care of after
          your arrival in Helsinki. Once you've got these things taken care of,
          you should be ready to go! Welcome to Helsinki!
        </p>
      </InfoBanner>
    <div :class="$style.content">
      <div :class="$style.main">
        <CheckList
          :class="$style.checklist"
          :items="items"
        />
      </div>
      <div :class="$style.side">
        <h2>Print or save your result</h2>
        <LinkButton :href="pdfUrl" target="_blank">
          Show pdf file
        </LinkButton>
      </div>
    </div>
    <InfoFooter>
      <h2>
        Any questions? Contact one of Helsinki's helpful services listed below:
      </h2>
      <h3>
        International House Helsinki
      </h3>
      <p>
        Lintulahdenkuja 2 D, 00530 Helsinki<br/>

        Monday–Friday 9:00–16:00<br/>

        Please note the following exceptions to regular service hours:   TE office
        desk is closed daily between 12:00–13:00. The Finnish Centre for
        Pensions (ETK) is present at the service point from Monday to Wednesday,
        9:00–12:00 and 13:00–16:00.
      </p>
      <h3>
        Helsinki-info
      </h3>
      <p>
        <strong>Tel</strong> 09 31011 111<br/>

        <strong>Chat</strong> neuvonta.hel.fi<br/>

        <strong>Service point</strong> IHH and Oodi
      </p>
    </InfoFooter>
  </div>
</template>

<script>
import {computed} from '@vue/composition-api'

import LinkButton from '@/components/LinkButton'

import {
  checklist as CHECKLIST
} from '@/assets/configuration.yaml'

export default {
  name: 'CheckListView',
  setup (_, context) {
    const items = computed(() => {
      const itemIdsStr = context.root.$route.query.items
      const itemIds = itemIdsStr ? itemIdsStr.split(',') : []
      return CHECKLIST.filter(({id, always}) => always || itemIds.includes(id))
    })
    const pdfUrl = computed(() => {
      const itemIdsStr = context.root.$route.query.items
      const itemIds = itemIdsStr ? itemIdsStr.split(',').sort() : []
      return `/first-steps-checklist-${itemIds.join('-')}.pdf`
    })
    return {
      items,
      pdfUrl
    }
  },
  components: {
    LinkButton
  }
}
</script>

<style module lang="scss">
.content {
  padding: hds.$spacing-l hds.$spacing-s;

  @include mq.mq($from: hds.$breakpoint-l) {
    display: flex;
  }

  .main {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    margin-bottom: hds.$spacing-l;

    @include mq.mq($from: hds.$breakpoint-l) {
      margin-bottom: 0;
    }
  }

  .side {
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;

    @include mq.mq($from: hds.$breakpoint-l) {
      text-align: right;
      margin-left: hds.$spacing-l;
    }
  }
}
</style>
