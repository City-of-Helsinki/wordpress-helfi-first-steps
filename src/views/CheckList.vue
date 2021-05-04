<template>
  <div>
    <div :class="$style.infoBannerContainer">
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
    </div>
    <div :class="$style.content">
      <div :class="$style.main">
        <CheckList
          :class="$style.checklist"
          :items="items"
        />
      </div>
      <div :class="$style.side">
        <h2 v-if="pdfUrl || emailUrl">Print or save your result</h2>
        <LinkButton v-if="pdfUrl" :href="pdfUrl" target="_blank">
          Show pdf file
        </LinkButton>
        <LinkButton v-if="emailUrl" :href="emailUrl" target="_blank">
          Send via email
        </LinkButton>
      </div>
    </div>
    <div :class="$style.infoFooterContainer">
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
  </div>
</template>

<script>
import {computed, inject} from '@vue/composition-api'
import shortHash from 'short-hash'

import {
  checklist as CHECKLIST
} from '@/assets/configuration.yaml'

export default {
  name: 'CheckListView',
  setup (_, context) {
    const itemIdHash = computed(() => {
      const itemIdsStr = context.root.$route.query.items
      const itemIds = itemIdsStr ? itemIdsStr.split(',').sort() : []
      const itemIdHash = shortHash(itemIds.sort().join('-'))
      return itemIdHash
    })
    const {
      pdfBaseUrl,
      emailBaseUrl,
      emailQueryKey
    } = inject('appOptions', {
      pdfBaseUrl: undefined,
      emailBaseUrl: undefined,
      emailQueryKey: undefined
    })
    const items = computed(() => {
      const itemIdsStr = context.root.$route.query.items
      const itemIds = itemIdsStr ? itemIdsStr.split(',') : []
      return CHECKLIST.filter(({id, always}) => always || itemIds.includes(id))
    })
    const pdfUrl = computed(() => {
      if (!pdfBaseUrl) return
      return `${pdfBaseUrl}/first-steps-checklist-${itemIdHash.value}.pdf`
    })
    const emailUrl = computed(() => {
      if (!emailBaseUrl || !emailQueryKey) return
      return `${emailBaseUrl}?${emailQueryKey}=${itemIdHash.value}`
    })
    return {
      items,
      pdfUrl,
      emailUrl
    }
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

    > a {
      margin-right: hds.$spacing-2-xs;
    }

    @include mq.mq($from: hds.$breakpoint-l) {
      text-align: right;
      margin-left: hds.$spacing-l;

      display: flex;
      flex-direction: column;
      align-items: flex-end;

      > a {
        box-sizing: border-box;
        margin-right: 0;
        min-width: 150px;
        text-align: center;
      }
      > a + a {
        margin-top: hds.$spacing-2-xs;
      }
    }
  }
}

.infoBannerContainer {
  margin-bottom: hds.$spacing-2-xs;
}

.infoFooterContainer {
  margin-top: hds.$spacing-2-xs;
}
</style>
