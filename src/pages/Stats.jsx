import React from "react";

const Stats = () => {
  return (
    <div class="bg-white dark:bg-blue-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div class="mx-auto flex max-w-xs flex-col gap-y-4 ">
            <dt class="text-base leading-7 text-gray-600 dark:text-gray-400">
              Transactions every 24 hours
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              44 million
            </dd>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-600 dark:text-gray-400">
              Assets under holding
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              $119 trillion
            </dd>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-600 dark:text-gray-400">
              New users annually
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              46,000
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;
