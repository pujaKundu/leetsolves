/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
  -slow pointer shifts by one and fast shifts by two 
  -if slow and fast pointer meet at the same position that means a cycle exists
 */


var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast)
            return true
    }
    return false
};