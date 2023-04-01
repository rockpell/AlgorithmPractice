class 추억점수 {
    fun solution(name: Array<String>, yearning: IntArray, photo: Array<Array<String>>): IntArray {
        var answer = mutableListOf<Int>()
        val dict = mutableMapOf<String, Int>()

        for (i in 0 until name.size) {
            dict[name[i]] = yearning[i]
        }
        for (itemList in photo) {
            val value = itemList.fold(0) { total, it ->
                total + (dict[it] ?: 0)
            }
            answer.add(value)
        }
        return answer.toIntArray()
    }
}

fun main(args: Array<String>) {
    val solution = 추억점수()

    val res = solution.solution(
        name = arrayOf("may", "kein", "kain", "radi"), yearning = intArrayOf(5, 10, 1, 3),
        photo = arrayOf(
            arrayOf("may", "kein", "kain", "radi"),
            arrayOf("may", "kein", "brin", "deny"),
            arrayOf("kon", "kain", "may", "coni")
        )
    )
    println(res)
}