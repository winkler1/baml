# This file is generated by the BAML compiler.
# Do not edit this file directly.
# Instead, edit the BAML files and recompile.

# ruff: noqa: E501,F401
# flake8: noqa: E501,F401
# pylint: disable=unused-import,line-too-long
# fmt: off

from ..types.enums.enm_namedargssingleenumlist2 import NamedArgsSingleEnumList2
from baml_core.stream import AsyncStream
from typing import Callable, List, Protocol, runtime_checkable


import typing

import pytest
from contextlib import contextmanager
from unittest import mock

ImplName = typing.Literal["default_config"]

T = typing.TypeVar("T", bound=typing.Callable[..., typing.Any])
CLS = typing.TypeVar("CLS", bound=type)


IV2_TestFnNamedArgsSingleEnumListOutput = str

@runtime_checkable
class IV2_TestFnNamedArgsSingleEnumList(Protocol):
    """
    This is the interface for a function.

    Args:
        myArg: List[NamedArgsSingleEnumList2]

    Returns:
        str
    """

    async def __call__(self, *, myArg: List[NamedArgsSingleEnumList2]) -> str:
        ...

   

@runtime_checkable
class IV2_TestFnNamedArgsSingleEnumListStream(Protocol):
    """
    This is the interface for a stream function.

    Args:
        myArg: List[NamedArgsSingleEnumList2]

    Returns:
        AsyncStream[str, str]
    """

    def __call__(self, *, myArg: List[NamedArgsSingleEnumList2]
) -> AsyncStream[str, str]:
        ...
class BAMLV2_TestFnNamedArgsSingleEnumListImpl:
    async def run(self, *, myArg: List[NamedArgsSingleEnumList2]) -> str:
        ...
    
    def stream(self, *, myArg: List[NamedArgsSingleEnumList2]
) -> AsyncStream[str, str]:
        ...

class IBAMLV2_TestFnNamedArgsSingleEnumList:
    def register_impl(
        self, name: ImplName
    ) -> typing.Callable[[IV2_TestFnNamedArgsSingleEnumList, IV2_TestFnNamedArgsSingleEnumListStream], None]:
        ...

    async def __call__(self, *, myArg: List[NamedArgsSingleEnumList2]) -> str:
        ...

    def stream(self, *, myArg: List[NamedArgsSingleEnumList2]
) -> AsyncStream[str, str]:
        ...

    def get_impl(self, name: ImplName) -> BAMLV2_TestFnNamedArgsSingleEnumListImpl:
        ...

    @contextmanager
    def mock(self) -> typing.Generator[mock.AsyncMock, None, None]:
        """
        Utility for mocking the V2_TestFnNamedArgsSingleEnumListInterface.

        Usage:
            ```python
            # All implementations are mocked.

            async def test_logic() -> None:
                with baml.V2_TestFnNamedArgsSingleEnumList.mock() as mocked:
                    mocked.return_value = ...
                    result = await V2_TestFnNamedArgsSingleEnumListImpl(...)
                    assert mocked.called
            ```
        """
        ...

    @typing.overload
    def test(self, test_function: T) -> T:
        """
        Provides a pytest.mark.parametrize decorator to facilitate testing different implementations of
        the V2_TestFnNamedArgsSingleEnumListInterface.

        Args:
            test_function : T
                The test function to be decorated.

        Usage:
            ```python
            # All implementations will be tested.

            @baml.V2_TestFnNamedArgsSingleEnumList.test
            async def test_logic(V2_TestFnNamedArgsSingleEnumListImpl: IV2_TestFnNamedArgsSingleEnumList) -> None:
                result = await V2_TestFnNamedArgsSingleEnumListImpl(...)
            ```
        """
        ...

    @typing.overload
    def test(self, *, exclude_impl: typing.Iterable[ImplName] = [], stream: bool = False) -> pytest.MarkDecorator:
        """
        Provides a pytest.mark.parametrize decorator to facilitate testing different implementations of
        the V2_TestFnNamedArgsSingleEnumListInterface.

        Args:
            exclude_impl : Iterable[ImplName]
                The names of the implementations to exclude from testing.
            stream: bool
                If set, will return a streamable version of the test function.

        Usage:
            ```python
            # All implementations except the given impl will be tested.

            @baml.V2_TestFnNamedArgsSingleEnumList.test(exclude_impl=["implname"])
            async def test_logic(V2_TestFnNamedArgsSingleEnumListImpl: IV2_TestFnNamedArgsSingleEnumList) -> None:
                result = await V2_TestFnNamedArgsSingleEnumListImpl(...)
            ```

            ```python
            # Streamable version of the test function.

            @baml.V2_TestFnNamedArgsSingleEnumList.test(stream=True)
            async def test_logic(V2_TestFnNamedArgsSingleEnumListImpl: IV2_TestFnNamedArgsSingleEnumListStream) -> None:
                async for result in V2_TestFnNamedArgsSingleEnumListImpl(...):
                    ...
            ```
        """
        ...

    @typing.overload
    def test(self, test_class: typing.Type[CLS]) -> typing.Type[CLS]:
        """
        Provides a pytest.mark.parametrize decorator to facilitate testing different implementations of
        the V2_TestFnNamedArgsSingleEnumListInterface.

        Args:
            test_class : Type[CLS]
                The test class to be decorated.

        Usage:
        ```python
        # All implementations will be tested in every test method.

        @baml.V2_TestFnNamedArgsSingleEnumList.test
        class TestClass:
            def test_a(self, V2_TestFnNamedArgsSingleEnumListImpl: IV2_TestFnNamedArgsSingleEnumList) -> None:
                ...
            def test_b(self, V2_TestFnNamedArgsSingleEnumListImpl: IV2_TestFnNamedArgsSingleEnumList) -> None:
                ...
        ```
        """
        ...

BAMLV2_TestFnNamedArgsSingleEnumList: IBAMLV2_TestFnNamedArgsSingleEnumList