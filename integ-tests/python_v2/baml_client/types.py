###############################################################################
#
#  Welcome to Baml! To use this generated code, please run the following:
#
#  $ pip install baml
#
###############################################################################

# This file was generated by BAML: please do not edit it. Instead, edit the
# BAML files and re-generate this code.
#
# ruff: noqa: E501,F401
# flake8: noqa: E501,F401
# pylint: disable=unused-import,line-too-long
# fmt: off
import baml_py
from enum import Enum
from pydantic import BaseModel
from typing import List, Optional, Union
class Category(str, Enum):
    Refund = "Refund"
    CancelOrder = "CancelOrder"
    TechnicalSupport = "TechnicalSupport"
    AccountIssue = "AccountIssue"
    Question = "Question"

class Category2(str, Enum):
    Refund = "Refund"
    CancelOrder = "CancelOrder"
    TechnicalSupport = "TechnicalSupport"
    AccountIssue = "AccountIssue"
    Question = "Question"

class Category3(str, Enum):
    Refund = "Refund"
    CancelOrder = "CancelOrder"
    TechnicalSupport = "TechnicalSupport"
    AccountIssue = "AccountIssue"
    Question = "Question"

class DataType(str, Enum):
    Resume = "Resume"
    Event = "Event"

class EnumInClass(str, Enum):
    ONE = "ONE"
    TWO = "TWO"

class EnumInClass2(str, Enum):
    ONE = "ONE"
    TWO = "TWO"

class EnumOutput(str, Enum):
    ONE = "ONE"
    TWO = "TWO"
    THREE = "THREE"

class EnumOutput2(str, Enum):
    ONE = "ONE"
    TWO = "TWO"
    THREE = "THREE"

class NamedArgsSingleEnum(str, Enum):
    ONE = "ONE"
    TWO = "TWO"

class NamedArgsSingleEnum2(str, Enum):
    ONE = "ONE"
    TWO = "TWO"

class NamedArgsSingleEnumList(str, Enum):
    ONE = "ONE"
    TWO = "TWO"

class NamedArgsSingleEnumList2(str, Enum):
    ONE = "ONE"
    TWO = "TWO"

class OptionalTest_CategoryType(str, Enum):
    Aleph = "Aleph"
    Beta = "Beta"
    Gamma = "Gamma"

class OptionalTest_CategoryTypev2(str, Enum):
    Aleph = "Aleph"
    Beta = "Beta"
    Gamma = "Gamma"

class OrderStatus(str, Enum):
    ORDERED = "ORDERED"
    SHIPPED = "SHIPPED"
    DELIVERED = "DELIVERED"
    CANCELLED = "CANCELLED"

class OverrideEnum(str, Enum):
    ONE = "ONE"
    TWO = "TWO"

class Tag(str, Enum):
    Security = "Security"
    AI = "AI"
    Blockchain = "Blockchain"

class TestEnum(str, Enum):
    A = "A"
    B = "B"
    C = "C"
    D = "D"
    E = "E"
    F = "F"
    G = "G"

class Blah(BaseModel):
    prop4: Optional[str]

class Blah2(BaseModel):
    prop4: Optional[str]

class ClassOptionalFields(BaseModel):
    prop1: Optional[str]
    prop2: Optional[str]

class ClassOptionalFieldsv2(BaseModel):
    prop1: Optional[str]
    prop2: Optional[str]

class ClassOptionalOutput(BaseModel):
    prop1: str
    prop2: str

class ClassOptionalOutput2(BaseModel):
    prop1: Optional[str]
    prop2: Optional[str]
    prop3: Optional["Blah"]

class ClassOptionalOutput2v2(BaseModel):
    prop1: Optional[str]
    prop2: Optional[str]
    prop3: Optional["Blah2"]

class ClassWithImage(BaseModel):
    myImage: baml_py.Image
    param2: str
    fake_image: "FakeImage"

class DynamicPropsClass(BaseModel):
    prop1: str
    prop2: str
    prop3: int

class Email(BaseModel):
    subject: str
    body: str
    from_address: str

class Event(BaseModel):
    title: str
    date: str
    location: str
    description: str

class FakeImage(BaseModel):
    url: str

class ModifiedOutput(BaseModel):
    reasoning: str
    answer: str

class NamedArgsSingleClass(BaseModel):
    key: str
    key_two: bool
    key_three: int

class NamedArgsSingleClass2(BaseModel):
    key: str
    key_two: bool
    key_three: int

class NamedArgsSingleClassList2(BaseModel):
    key: str
    key_two: bool
    key_three: int

class OptionalClass(BaseModel):
    prop1: str
    prop2: str

class OptionalClassv2(BaseModel):
    prop1: str
    prop2: str

class OptionalTest_Prop1(BaseModel):
    omega_a: str
    omega_b: int

class OptionalTest_Prop1v2(BaseModel):
    omega_a: str
    omega_b: int

class OptionalTest_ReturnType(BaseModel):
    omega_1: Optional["OptionalTest_Prop1"]
    omega_2: Optional[str]
    omega_3: List[Optional["OptionalTest_CategoryType"]]

class OptionalTest_ReturnTypev2(BaseModel):
    omega_1: Optional["OptionalTest_Prop1v2"]
    omega_2: Optional[str]
    omega_3: List[Optional["OptionalTest_CategoryTypev2"]]

class OrderInfo(BaseModel):
    order_status: "OrderStatus"
    tracking_number: Optional[str]
    estimated_arrival_date: Optional[str]

class OverrideClass(BaseModel):
    prop1: str
    prop2: str

class RaysData(BaseModel):
    dataType: "DataType"
    value: Union["Resume", "Event"]

class Resume(BaseModel):
    name: str
    email: str
    phone: str
    experience: List[str]
    education: List[str]
    skills: List[str]

class SearchParams(BaseModel):
    dateRange: Optional[int]
    location: List[str]
    jobTitle: Optional["WithReasoning"]
    company: Optional["WithReasoning"]
    description: List["WithReasoning"]
    tags: List[Union["Tag", str]]

class SomeClass2(BaseModel):
    prop1: str
    prop2: str

class TestClassAlias(BaseModel):
    key: str
    key2: str
    key3: str
    key4: str
    key5: str

class TestClassWithEnum(BaseModel):
    prop1: str
    prop2: "EnumInClass"

class TestClassWithEnum2(BaseModel):
    prop1: str
    prop2: "EnumInClass"

class TestOutputClass(BaseModel):
    prop1: str
    prop2: int

class TestOutputClass2(BaseModel):
    prop1: str
    prop2: int

class UnionTest_ReturnType(BaseModel):
    prop1: Union[str, bool]
    prop2: List[Union[float, bool]]
    prop3: Union[List[float], List[bool]]

class UnionTest_ReturnTypev2(BaseModel):
    prop1: Union[str, bool]
    prop2: List[Union[float, bool]]
    prop3: Union[List[float], List[bool]]

class WithReasoning(BaseModel):
    value: str
    reasoning: str