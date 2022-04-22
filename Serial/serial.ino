int LED = 13;
int ipt;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(LED, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available()) {
    ipt = Serial.read();
    if(ipt == 1) {
      digitalWrite(LED, HIGH);
      Serial.println(digitalRead(LED));
    } else if(ipt == 0) {
      digitalWrite(LED, LOW);
      Serial.println(digitalRead(LED));
    } else {
      Serial.println("ERROR");
    }
  }
}
