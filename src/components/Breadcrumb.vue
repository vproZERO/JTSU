<template>
  <div>
    <!-- Breadcrumb -->
    <nav class="flex px-5 py-3 text-gray-700" aria-label="Breadcrumb">
      <ol
        class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
      >
        <li
          class="inline-flex items-center border-r-2 pr-[7px] border-gray-400"
        >
          <router-link
            to="/someRoute"
            class="inline-flex items-center text-sm font-medium text-gray-400 hover:text-[#1C414F]"
          >
            <svg
              class="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
              />
            </svg>
            Предметы
          </router-link>
        </li>
        <li>
          <router-link
            to="/topics"
            class="inline-flex items-center text-sm font-medium text-gray-400 hover:text-[#1C414F]"
          >
            Теория и методика физической реабилитации
          </router-link>
        </li>
      </ol>
    </nav>
  </div>
</template>
