# This file is generated by the BAML compiler.
# Do not edit this file directly.
# Instead, edit the BAML files and recompile.

# ruff: noqa: E501,F401
# flake8: noqa: E501,F401
# pylint: disable=unused-import,line-too-long
# fmt: off

from ..types.classes.cls_event import Event
from ..types.classes.cls_raysdata import RaysData
from ..types.classes.cls_resume import Resume
from ..types.enums.enm_datatype import DataType
from ..types.partial.classes.cls_event import PartialEvent
from ..types.partial.classes.cls_raysdata import PartialRaysData
from ..types.partial.classes.cls_resume import PartialResume
from baml_core.stream import AsyncStream
from typing import Callable, Protocol, runtime_checkable


import typing

import pytest
from contextlib import contextmanager
from unittest import mock

ImplName = typing.Literal["default_config"]

T = typing.TypeVar("T", bound=typing.Callable[..., typing.Any])
CLS = typing.TypeVar("CLS", bound=type)


IGetDataTypeOutput = RaysData

@runtime_checkable
class IGetDataType(Protocol):
    """
    This is the interface for a function.

    Args:
        text: str

    Returns:
        RaysData
    """

    async def __call__(self, *, text: str) -> RaysData:
        ...

   

@runtime_checkable
class IGetDataTypeStream(Protocol):
    """
    This is the interface for a stream function.

    Args:
        text: str

    Returns:
        AsyncStream[RaysData, PartialRaysData]
    """

    def __call__(self, *, text: str
) -> AsyncStream[RaysData, PartialRaysData]:
        ...
class BAMLGetDataTypeImpl:
    async def run(self, *, text: str) -> RaysData:
        ...
    
    def stream(self, *, text: str
) -> AsyncStream[RaysData, PartialRaysData]:
        ...

class IBAMLGetDataType:
    def register_impl(
        self, name: ImplName
    ) -> typing.Callable[[IGetDataType, IGetDataTypeStream], None]:
        ...

    async def __call__(self, *, text: str) -> RaysData:
        ...

    def stream(self, *, text: str
) -> AsyncStream[RaysData, PartialRaysData]:
        ...

    def get_impl(self, name: ImplName) -> BAMLGetDataTypeImpl:
        ...

    @contextmanager
    def mock(self) -> typing.Generator[mock.AsyncMock, None, None]:
        """
        Utility for mocking the GetDataTypeInterface.

        Usage:
            ```python
            # All implementations are mocked.

            async def test_logic() -> None:
                with baml.GetDataType.mock() as mocked:
                    mocked.return_value = ...
                    result = await GetDataTypeImpl(...)
                    assert mocked.called
            ```
        """
        ...

    @typing.overload
    def test(self, test_function: T) -> T:
        """
        Provides a pytest.mark.parametrize decorator to facilitate testing different implementations of
        the GetDataTypeInterface.

        Args:
            test_function : T
                The test function to be decorated.

        Usage:
            ```python
            # All implementations will be tested.

            @baml.GetDataType.test
            async def test_logic(GetDataTypeImpl: IGetDataType) -> None:
                result = await GetDataTypeImpl(...)
            ```
        """
        ...

    @typing.overload
    def test(self, *, exclude_impl: typing.Iterable[ImplName] = [], stream: bool = False) -> pytest.MarkDecorator:
        """
        Provides a pytest.mark.parametrize decorator to facilitate testing different implementations of
        the GetDataTypeInterface.

        Args:
            exclude_impl : Iterable[ImplName]
                The names of the implementations to exclude from testing.
            stream: bool
                If set, will return a streamable version of the test function.

        Usage:
            ```python
            # All implementations except the given impl will be tested.

            @baml.GetDataType.test(exclude_impl=["implname"])
            async def test_logic(GetDataTypeImpl: IGetDataType) -> None:
                result = await GetDataTypeImpl(...)
            ```

            ```python
            # Streamable version of the test function.

            @baml.GetDataType.test(stream=True)
            async def test_logic(GetDataTypeImpl: IGetDataTypeStream) -> None:
                async for result in GetDataTypeImpl(...):
                    ...
            ```
        """
        ...

    @typing.overload
    def test(self, test_class: typing.Type[CLS]) -> typing.Type[CLS]:
        """
        Provides a pytest.mark.parametrize decorator to facilitate testing different implementations of
        the GetDataTypeInterface.

        Args:
            test_class : Type[CLS]
                The test class to be decorated.

        Usage:
        ```python
        # All implementations will be tested in every test method.

        @baml.GetDataType.test
        class TestClass:
            def test_a(self, GetDataTypeImpl: IGetDataType) -> None:
                ...
            def test_b(self, GetDataTypeImpl: IGetDataType) -> None:
                ...
        ```
        """
        ...

BAMLGetDataType: IBAMLGetDataType