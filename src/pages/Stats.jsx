import React from "react";

const Stats = () => {
  return (
    <div class="bg-white dark:bg-blue-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div class="mx-auto flex max-w-xs flex-col gap-y-4 ">
            <dt class="text-base leading-7 text-gray-600 dark:text-gray-400">
              7/24 Hizmetinizde
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              8 Araç
            </dd>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-600 dark:text-gray-400">
              Ulaşılabilirlik
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              7/24 Saat
            </dd>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-600 dark:text-gray-400">
              Muafiyetli Kaskolu Araçlar
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              10,000₺
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;
