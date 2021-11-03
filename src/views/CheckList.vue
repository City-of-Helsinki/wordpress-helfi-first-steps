<template>
  <div>
    <a ref="topAnchor" tabindex="-1"></a>

    <div :class="$style.infoBannerContainer">
      <InfoBanner>
        <h1>
          Your personalised First Steps Checklist
        </h1>
        <p>
          The list below outlines the things you will need to take care of once you have arrived in
          Helsinki. Welcome! We hope you enjoy your stay.
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
          Any questions?
        </h2>
        <h3>
          <a target="_blank" href="https://ihhelsinki.fi/">International House Helsinki</a>
        </h3>
        <p>
          Lintulahdenkuja 2 D, 00530 Helsinki<br/>
          Mon–Fri 9-16
        </p>
        <h3>
          <a target="_blank" href="Helsinki-info">Helsinki-info</a>
        </h3>
        <p>
          Tel. +358 9 31011 111 and <a target="_blank"
          href="https://www.hel.fi/kanslia/neuvonta-en/">chat</a><br/>

          Mon–Thu 9–16, Fri 10–15<br/>

          Service points: International House Helsinki and Central Library Oodi
        </p>
      </InfoFooter>
    </div>
  </div>
</template>

<script>
import {computed, inject, ref, onMounted} from '@vue/composition-api'
import shortHash from 'short-hash'

export default {
  name: 'CheckListView',
  setup (_, context) {
    const topAnchor = ref(null)
    const itemIdHash = computed(() => {
      const itemIdsStr = context.root.$route.query.items
      const itemIds = itemIdsStr ? itemIdsStr.split(',').sort() : []
      const itemIdHash = shortHash(itemIds.sort().join('-'))
      return itemIdHash
    })
    const {
      pdfBaseUrl,
      emailBaseUrl,
      emailQueryKey,
      checklist
    } = inject('appOptions', {
      pdfBaseUrl: undefined,
      emailBaseUrl: undefined,
      emailQueryKey: undefined
    })
    const items = computed(() => {
      const itemIdsStr = context.root.$route.query.items
      const itemIds = itemIdsStr ? itemIdsStr.split(',') : []
      return checklist.filter(({id, always}) => always || itemIds.includes(id))
    })
    const pdfUrl = computed(() => {
      if (!pdfBaseUrl) return
      return `${pdfBaseUrl}/first-steps-checklist-${itemIdHash.value}.pdf`
    })
    const emailUrl = computed(() => {
      if (!emailBaseUrl || !emailQueryKey) return
      return `${emailBaseUrl}?${emailQueryKey}=${itemIdHash.value}`
    })

    onMounted(() => {
      topAnchor.value.focus()
    })

    return {
      topAnchor,
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
