import { Component } from '@angular/core';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent {


  constructor( public userService:UserService){}
}
