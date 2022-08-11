/**
- function(�Լ�) 
�Լ��� �ѹ��� �� �۾����� �����ϴ°� ����.
�б� ���� � �������� �� �� �ְ� ���̹��� �ؾ� ����.

*/

// function �Լ�
// �Լ� �Լ���(�Ű�����){ ���� �� �ڵ� }
// �Ű������� ���� �Լ�
// function showError() {
//     alert(`ERROR!`);
// }
// showError();        // alert "ERROR!"


// �Űܺ����� �ִ� �Լ�
function sayHello(name) {
    let msg = 'Hello';      // msg ������ �Լ��ȿ� �ִ� ���������̱⿡ �Լ� �ۿ����� ��� �� �� ����. 
    if (name) {             // msg ������ �Լ� �ۿ��� ���� �ʹٸ� �Լ� �ۿ� �����ϴ� ���������� ����ؾ��Ѵ�.
        msg += `, ${name}`;
    }
    console.log(msg);
}
sayHello('Bro');    // Hellow Bro
sayHello('Mike');   // Hellow Mike
sayHello('Tom');    // Hellow Tom


// �������� (global variable), �������� (local variable)
let msg1 = "Welcome";
console.log(msg1);  // Welcome

function sayHello2(name) {
    let msg1 = "Hello";
    console.log(`${msg1}, ${name}`);    // Hello, Bro
}
sayHello2('Bro');
console.log(msg1);  // Welcome


// ��������, �������� 2
let name = 'Mike';

function sayHello3(name) {
    console.log(name);
}
sayHello3();        // undefined
sayHello3('Jane');  // Jane


// OR
function sayHello4(name) {
    let newName = name || 'friend';
    let msg = `Hello, ${newName}`;
    console.log(msg);
}
sayHello4();        // Hello friend
sayHello4('Mike');  // Hello Mike


// default value
function sayHello5(name = 'friend') {   // �μ����� ȣ�� �� ��� �⺻������ friend�� name ������ �Ҵ�.
    let msg = `Hello, ${name}`;
    console.log(msg);
}
sayHello5();        // Hello friend
sayHello5('Mike');  // Hello Mike


// return���� �� ��ȯ
function add(num1, num2) {
    return num1 + num2;
}

const result = add(3, 5);
console.log(result);    // 8