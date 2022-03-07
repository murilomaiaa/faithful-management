import { AddressDTO, BaseEntity, BaseEntityProps } from '.';

export type FaithfulProps = BaseEntityProps & {
  fullName: string;
  birthday: string;
  maritalStatus: string;
  phone: string;
  converted?: {
    atDay: string;
    church: string;
  };
  baptism?: {
    atDay: string;
    church: string;
  };
  // cameIn: string;
  address: AddressDTO;
};

export class Faithful extends BaseEntity {
  private fullName: string;
  private birthday: string;
  private maritalStatus: string;
  private phone: string;
  private converted?: {
    atDay: string;
    church: string;
  };
  private baptism?: {
    atDay: string;
    church: string;
  };
  private address: AddressDTO;

  constructor(props: FaithfulProps) {
    super(props);
    this.fullName = props.fullName;
    this.birthday = props.birthday;
    this.maritalStatus = props.maritalStatus;
    this.phone = props.phone;
    this.converted = props.converted;
    this.address = props.address;
  }

  protected validate(): Error | undefined {
    return;
  }
}
