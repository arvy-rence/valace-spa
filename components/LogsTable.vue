<template>
    <div class="md:px-32 py-8 w-full">
        <div class="shadow overflow-hidden rounded border-b border-gray-300">
            <table class="min-w-full bg-white">
                <thead class="bg-primary text-white">
                <tr>
                    <th class="w-1/3 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Log ID</th>
                    <th class="w-1/3 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Log Description</th>
                    <th class="text-left py-3 px-4 uppercase font-bold text-sm font-khula">Log Date</th>
                </tr>
                </thead>
                <tbody class="text-black" v-for="(log,index) in logs" :key="index">
                    <tr>
                        <td class="w-1/3 text-left py-3 px-4 font-kulim">{{log.id}}</td>
                        <td class="w-1/3 text-left py-3 px-4 font-kulim">{{log.log_description}}</td>
                        <td class="w-1/3 text-left py-3 px-4 font-kulim">{{log.log_date}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
</template>

<script>
export default {
    name: "LogsTable",
    props: {
        logs: {
            type: Array,
            default: () => []
        }
    }
}
</script>