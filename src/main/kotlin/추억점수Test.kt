package main.kotlin

import org.junit.jupiter.api.Assertions.assertArrayEquals
import org.junit.jupiter.api.Test
import 추억점수

class 추억점수Test {
    @Test
    fun test() {
        val solution = 추억점수()

        val res = solution.solution(
            name = arrayOf("may", "kein", "kain", "radi"), yearning = intArrayOf(5, 10, 1, 3),
            photo = arrayOf(
                arrayOf("may", "kein", "kain", "radi"),
                arrayOf("may", "kein", "brin", "deny"),
                arrayOf("kon", "kain", "may", "coni")
            )
        )

        assertArrayEquals(intArrayOf(19, 15, 6), res)
    }
}